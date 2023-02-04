import { useRef, useState, useEffect } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useForm, Controller } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { storage } from "../../Shared/firebase";
import { createCrew } from "../../Redux/modules/crewSlice";
import Select from "react-select";
import DaumPostcode from "react-daum-postcode";
import { ReactComponent as ChatXbtn } from "../../Image/chatx.svg";
import { colourOptions, addressOptions, seoulOptions, incheonOptions, gyeonggiOptions } from "./components/CreateCrewOption";

const CreateCrew = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data, addressD, keyword, fileUrl );
    const payload = {
      name: data.name,
      content: data.content,
      imgUrl: fileUrl,
      mainActivityGym: data.place,
      mainActivityArea: address.concat(" ", addressD),
      keywords: keyword,
    };
    if ( data.content && data.name && data.place && addressD && keyword.length === 3 && fileUrl ) {
      dispatch(createCrew(payload));
    } else {
      alert('★요구사항을 다 채워주셔야 합니다★')
    }
  };

  const [imgUrl, setImgUrl] = useState(null);
  const imgRef = useRef();

  const onChangeImg = (e) => {
    const reader = new FileReader();
    const file = imgRef.current.files[0];
    // console.log(file);
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImgUrl(reader.result);
    };
  };
  const [files, setFiles] = useState("");

  function onLoadFile(e) {
    const file = e.target.files;
    setFiles(file);
  }

  const [fileUrl, setFileUrl] = useState("");
  const [reload, setReload] = useState(false);

  const storage = getStorage();
  const storageRef = ref(storage);

  //upload_file.ref로 파일 url가져옴
  const uploadFB = async (e) => {
    // console.log(e.target.files);
    const upload_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );

    //upload_file.ref로 파일 url가져옴
    const file_url = await getDownloadURL(upload_file.ref);
    // console.log(file_url);
    setFileUrl(file_url);
  };

  //이미지 인풋박스 클릭시 업로드
  const onClickImg = () => {
    imgRef.current.click();
  };

  //셀렉트 저장용
  const [address, setAddress] = useState("");
  const [addressD, setAddressD] = useState("");
  const [keyword, setKeyword] = useState([]);

  const addressRef = useRef();

  const customStyles = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
      width: 400,
      padding: 0,
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
      fontSize: 14,
      textalign: "center",
    }),
    option: (styles) => ({ ...styles }),
  };

  const customStyles1 = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
      padding: 0,
      width: 150,
    }),
    container: (styles) => ({
      ...styles,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#666666",
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
      fontSize: 14,
      textalign: "center",
    }),
    container: (styles) => ({
      ...styles,
      padding: 0,
      backgroundColor: "#333333",
    }),
    option: (styles) => ({ ...styles }),
  };

  const customStyles2 = {
    control: (styles) => ({
      ...styles,
      backgroundColor: "transparent",
      border: "none",
      width: 250,
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "#666666",
    }),
    valueContainer: (styles) => ({
      ...styles,
      padding: 0,
      fontSize: 14,
    }),
    option: (styles) => ({ ...styles }),
  };

  //짐 선택
  //주소 검색 모달 열기
  const [isOpenPost, setIsOpenPost] = useState(false);

  //주소 저장
  const [addressDetail, setAddressDetail] = useState(""); // 상세주소

  const onChangeOpenPost = () => {
    setIsOpenPost(!isOpenPost);
  };

  const onCompletePost = (data) => {
    let fullAddr = data.address;
    let extraAddr = "";

    if (data.addressType === "R") {
      if (data.bname !== "") {
        extraAddr += data.bname;
      }
      if (data.buildingName !== "") {
        extraAddr +=
          extraAddr !== "" ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddr += extraAddr !== "" ? ` (${extraAddr})` : "";
    }
    setAddressDetail(fullAddr);
    setIsOpenPost(false);
  };

  const postCodeStyle = {
    display: "block",
    width: "400px",
    height: "400px",
    zIndex: 100,
    position: "absolute",
    top: "160px",
    right: "-800px",
  };

  return (
        <ThumbnailContainer onSubmit={handleSubmit(onSubmit)}>
          {isOpenPost && (
            <div style={{ position: "relative" }}>
              <DaumPostcode
                style={postCodeStyle}
                onComplete={onCompletePost}
                autoClose={false}
              />
              <ChatXbtn
                style={{
                  position: "absolute",
                  top: "134px",
                  right: "-797px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setIsOpenPost(false);
                }}
              />
            </div>
          )}
          <ThumbnailContentBox>
            <ImgBox
            imgUrl={imgUrl}
            >
              <input
                type="file"
                accept="image/*"
                ref={imgRef}
                onChange={(e) => {
                  onChangeImg(e);
                  uploadFB(e);
                }}
              />
              <ImgText
                type="button"
                onClick={(e) => {
                  onClickImg(e);
                }}
              >
            
              <PhotoButton>
                <Xbtn />
                <p>크루대표사진</p>
              </PhotoButton>
              
              </ImgText>
              <img src={imgUrl}></img>
            </ImgBox>
            <ContentBox onSubmit={handleSubmit(onSubmit)}>
              <TextBox>
                <p>크루 이름</p>
                <input
                  maxLength="20"
                  placeholder="크루 이름을 입력해주세요. (20자 이내)"
                  {...register("name", { required: true })}
                />
              </TextBox>
              <TextBox>
                <p>주 활동 지역</p>
                <Select
                  options={addressOptions}
                  placeholder="시 선택"
                  styles={customStyles1}
                  onChange={(s) => {
                    setAddress(s.value);
                    addressRef.current.setValue("");
                  }}
                />
                <Select
                  options={
                    address === "서울"
                      ? seoulOptions
                      : address === "인천"
                      ? incheonOptions
                      : gyeonggiOptions
                  }
                  placeholder="상세주소"
                  styles={customStyles2}
                  isClearable={true}
                  onChange={(s) => {
                    setAddressD(s.value);
                  }}
                  ref={addressRef}
                />
              </TextBox>
              <TextBox>
                <p>주 활동 짐</p>
                <input
                  type="text"
                  maxLength="20"
                  {...register("place", { required: true })}
                  placeholder="주 활동 짐을 입력해주세요. (20자 이내)"
                />
              </TextBox>
              <TextBox>
                <p>키워드</p>
                <Select
                  closeMenuOnSelect={false}
                  placeholder="크루 키워드를 3개 선택해주세요."
                  isMulti
                  width="400px"
                  height="60px"
                  isOptionDisabled={() => keyword.length > 2}
                  onChange={(s) => {
                    let result = s.map((a) => a.value);
                    setKeyword(result);
                  }}
                  options={colourOptions}
                  styles={customStyles}
                />
              </TextBox>
              <TextDetail>
                <p>크루 소개</p>
                <textarea
                  maxLength="100"
                  placeholder="크루에 대한 간단한 소개를 입력해주세요. 
                  예) 직장인으로 구성된 크루입니다. 매주 토요일마다 정기모임이 있어요."
                  {...register("content", { required: true })}
                />
              </TextDetail>
              <ButtonBox>
                <button type="submit" disabled={isSubmitting}>
                  크루 등록
                </button>
              </ButtonBox>
            </ContentBox>
          </ThumbnailContentBox>
        </ThumbnailContainer>
  );
};

export default CreateCrew;

const ThumbnailContainer = styled.form`
  width: 100%;
  height: 815px;
  background-color: #262626;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 100px;
  position: relative;
`;

const TabContainer = styled.div`
  width: 1920px;
  height: 864px;
  background-color: #141414;
  display: flex;
  justify-content: center;
`;

const ThumbnailContentBox = styled.div`
  width: 1200px;
  height: 600px;
  display: flex;
  justify-content: space-between;
`;

const ImgBox = styled.div`
  width: 600px;
  height: 600px;
  background-color: #202020;
  img {
    position: relative;
    top: -47rem;
    width: 100%;
    height: 100%;
    display: ${props => props.imgUrl ? "null" : "none"};
  }
  positon: relative;
  input {
    width: 100%;
    height: 100%;
    display: none;
  }
`;

const ImgText = styled.div`
  width: 300px;
  height: 300px;
  position: relative;
  left: 14rem;
  /* top: 250px; */
  p {
    margin-top: 170px;
    margin-left: 114px;
    font-weight: 700;
    font-size: 20px;
    color: #666666;
  }
`;

const ContentBox = styled.div`
  width: 550px;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

// const TextBox = styled.div`
//   width: 550px;
//   height: 60px;
//   input {
//     width: 100%;
//     height: 100%;
//     padding: 20px;
//     :focus {
//       outline: none;
//     }
//     background-color: #333333;
//     color: #666666;
//     border: none;
//     font-family: "Spoqa Han Sans Neo";
//     font-style: normal;
//     font-weight: 400;
//     font-size: 14px;
//     letter-spacing: -0.05em;
//   }
// `;

const TextBox = styled.div`
  width: 550px;
  height: 60px;
  background-color: #333333;
  padding: 21px 20px 21px 20px;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  p {
    width: 80px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
    color: #666666;
    margin-right: 20px;
  }
  input {
    height: 100%;
    width: 100%;
    background-color: #333333;
    color: #666666;
    border: none;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
    :focus {
      outline: none;
    }
  }
`;

const TextDetail = styled.div`
  width: 550px;
  height: 420px;
  margin-bottom: 35px;
  background-color: #333333;
  display: flex;
  padding: 31px 20px 31px 20px;
  align-items: center;
  p {
    width: 80px;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
    color: #666666;
    margin-right: 20px;
  }
  textarea {
    width: 100%;
    height: 100%;
    resize: none;
    overflow: hidden;
    white-space: pre-line;
    :focus {
      outline: none;
    }
    background-color: #333333;
    border: none;
    color: #666666;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
  }
`;

const ButtonBox = styled.div`
  width: 550px;
  height: 60px;
  display: flex;
  justify-content: space-between;
  font-family: "Spoqa Han Sans Neo";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  letter-spacing: -0.05em;
  backgrond-color: white;
  button {
    width: 100%;
    height: 60px;
    border: none;
    color: #666666;
    background-color: #999999;
    &:hover {
      color: #262626;
      background-color: #ffb800;
      transition: 0.5s;
    }
  }
`;

const PhotoButton = styled.div``;

const Xbtn = styled.button`
  width: 60px;
  height: 60px;
  background: none;
  border: none;
  position: absolute;
  right: 110px;
  top: 97px;
  ::before,
  ::after {
    position: absolute;
    top: -2px;
    content: "";
    height: 60px;
    width: 6px;
    background-color: #666666;
  }
  ::before {
    transform: rotate(90deg);
  }
  ::after {
    transform: rotate(0deg);
  }
`;
