import { useRef, useState } from "react";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Navbar from "../../Shared/Navbar";
import { storage } from "../../Shared/firebase";
import { createCrew } from "../../Redux/modules/crewSlice";

const CreateCrew = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const payload = {
      name: data.name,
      content: data.content,
      imgUrl: fileUrl,
    };
    dispatch(createCrew(payload));
  };

  const [imgUrl, setImgUrl] = useState(null);
  const imgRef = useRef();

  //이미지 미리보기
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
      ref(storage, `images/${e.target.files.name}`),
      e.target.files
    );
    // console.log(upload_file);

    //upload_file.ref로 파일 url가져옴
    const file_url = await getDownloadURL(upload_file.ref);
    // console.log(file_url);
    setFileUrl(file_url);
  };

  //이미지 인풋박스 클릭시 업로드
  const onClickImg = () => {
    imgRef.current.click();
  };

  //이미지 인풋 박스 내 텍스트 안보이게 하기
  const [imgTextVisible, setImgTextVisible] = useState(true);
  const handleImgText = () => {
    setImgTextVisible(false);
  };

  return (
    <div>
      <Navbar />
      <Warp>
        <ThumbnailContainer onSubmit={handleSubmit(onSubmit)}>
          <ThumbnailContentBox>
            <ImgBox>
              <input
                type="file"
                accept=".jpg, .png"
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
                  handleImgText(e);
                }}
              >
                {imgTextVisible && (
                  <PhotoButton>
                    <Xbtn />
                    <p>사진올리기</p>
                  </PhotoButton>
                )}
              </ImgText>
              <img src={imgUrl}></img>
            </ImgBox>
            <ContentBox onSubmit={handleSubmit(onSubmit)}>
              <TextBox>
                <input
                  placeholder="크루명"
                  {...register("name", { required: true })}
                />
              </TextBox>
              <TextDetail>
                <textarea
                  placeholder="크루소개"
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
        <TabContainer></TabContainer>
      </Warp>
    </div>
  );
};

export default CreateCrew;

const Warp = styled.div`
  display: flex;
  flex-direction: column;
`;

const ThumbnailContainer = styled.form`
  width: 1920px;
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
    width: 100%;
    height: 100%;
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
  position: absolute;
  left: 500px;
  top: 250px;
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

const TextBox = styled.div`
  width: 550px;
  height: 60px;
  background-color: red;
  input {
    width: 100%;
    height: 100%;
    padding: 20px;
    :focus {
      outline: none;
    }
    background-color: #333333;
    color: #666666;
    border: none;
    font-family: "Spoqa Han Sans Neo";
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    letter-spacing: -0.05em;
  }
`;

const TextDetail = styled.div`
  width: 550px;
  height: 420px;
  margin-bottom: 35px;
  background-color: gray;
  textarea {
    width: 100%;
    height: 100%;
    padding: 31px 20px 31px 20px;
    resize: none;
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
