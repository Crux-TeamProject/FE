import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../Shared/firebase'
import { useEffect, useState } from "react"
import { useCallback } from "react"
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components"
import * as Styled from "../Mypage"
import 사용자기본이미지 from "../../../Image/사용자기본이미지.jpg"
import 프로필편집 from "../../../Image/프로필수정.png"
import { useDispatch } from 'react-redux';
import { PutAxios } from '../../../Shared/api/main';

const EditMypage = ({ myPage, setEditMypage, setReload, reload }) => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams().memberId;

  const [editContent, setEditContent] = useState(myPage?.content);
  const [editNickname, setEditNickname] = useState(myPage?.nickname);

  const [fileUrl, setFileUrl] = useState(
    myPage?.imgUrl !== null ? myPage?.imgUrl : 사용자기본이미지
  );
  // console.log(fileUrl);
  const [userInfo, setUserInfo] = useState()

  function getUserInfo() {
    const userInfo = window.localStorage.getItem("userInfo");
    
    if(!userInfo) {
      return null;
    }
    const objUserInfo = JSON.parse(userInfo);
   
    return setUserInfo(objUserInfo)
  }

  useEffect(()=>{
    getUserInfo()
  },[dispatch])
  
  const userToken = userInfo?.access_token
  const userId = userInfo?.userId
  const userExpire = userInfo?.expire

  const changeImage = async (e) => {
    const upload_file = await uploadBytes(
      ref(storage, `images/${e.target.files[0].name}`),
      e.target.files[0]
    );
    const file_url = await getDownloadURL(upload_file.ref);
    setFileUrl(file_url);
  };

  const EditDone = () => {
    if (editContent === "") {
      alert("자기소개를 입력해주세요");
    } else if (editNickname.trim() === "") {
      alert("닉네임을 입력해주세요");
    } else if (editNickname.length <= 1 || editNickname.length >= 11 ) {
      alert("닉네임은 2~10글자 사이로 입력해주세요:)");
    } else if (editContent.length > 150) {
      alert("소개글은 150글자까지 입력 가능합니다:)");
    } 
    else {
      const payload = {
        content: editContent,
        nickname: editNickname,
        imgUrl: fileUrl,
      };
      editProfile(payload);
    }
  };
  

  const editProfile = async (payload) => {
    await PutAxios(`members`, payload)
      .then((res) => {
        alert("프로필 편집완료");
        setEditMypage(false);

        const userInfo = {
          access_token: userToken,
          expire: userExpire,
          nickname: editNickname,
          profileImg: fileUrl,
          userId: userId
        }
        const userInfoString = JSON.stringify(userInfo)
        window.localStorage.setItem("userInfo", userInfoString)
        setReload(!reload)
      })
      .catch((err) => {
        // console.log(err);
    }) 
}


    return(
        <>
            <Styled.Container>
                
                <Styled.Flex1>
                    <Styled.ProfileImg src={fileUrl !== "" ? fileUrl : 사용자기본이미지 }/>
                    
                                <label htmlFor="upload-photo">
                                    <input
                                        encType="multipart/form-data"
                                        accept="image/*"
                                        type="file"
                                        id="upload-photo"
                                        name="upload-photo"
                                        // ref={}
                                        style={{ display: 'none' }}
                                        onChange={changeImage}
                                    />
                                    <img src={프로필편집} style={{width:'6rem', margin:'-7rem 0 0 7rem', position:"absolute"}} type="button"/>
                                </label>


                    <Styled.ProfileNickname value={editNickname} onChange={(e)=>{setEditNickname(e.target.value)}}/>
                    
                    <div style={{display:'flex', flexDirection:'column'}}>
                        <Styled.ButtonBox>
                            <button onClick={EditDone}>수정완료</button>
                        </Styled.ButtonBox>
                        <Styled.ButtonBox onClick={()=>{setEditMypage(false)}}>
                            <button>취소</button>
                        </Styled.ButtonBox>
          </div>
        </Styled.Flex1>

        <Flex2>
          <JoinCrewTitle>참가중인 크루</JoinCrewTitle>

          <JoinCrewContent>
            {myPage?.crewList.map((crew) => {
              return <div key={crew.id}>&bull; &nbsp; {crew.name}</div>;
            })}
          </JoinCrewContent>

          <LikeGymTitle>즐겨찾기 한 클라이밍 짐</LikeGymTitle>

          <LikeGymContent>
            {myPage?.gymList.map((gym) => {
              return <div key={gym.id}>&bull; &nbsp; {gym.name}</div>;
            })}
          </LikeGymContent>

          <Introduce>
            소개글
          </Introduce>

          <ProfileContent
            value={editContent}
            onChange={(e) => {
              setEditContent(e.target.value);
            }}
          />
        </Flex2>

        <Flex3>
                    <LikeCrewTitle>좋아요 한 크루</LikeCrewTitle>
                    
                    <LikeCrewContent>

                        {
                            myPage?.likeCrewList.map((crew) => {
                                return(<div key={crew.id} type="button" onClick={()=>{navigate(`/crews/${crew.id}`)}}>
                                            &nbsp; &bull; &nbsp; {crew.name}
                                       </div>)
                            })
                        }
                
                    </LikeCrewContent>

                </Flex3>
      </Styled.Container>
    </>
  );
};

const Introduce = styled.div`
color: #666666;
margin: 3rem 0 1.5rem 7rem;
font-size: 2rem;
font-weight: 400;
`
const ProfileContent = styled.textarea`
  width: 83rem;
  height: 8rem;
  margin: 0 0 0 7rem;
  font-size: 2rem;
  font-weight: 500;
  padding: 1rem;
  color: #cccccc;
  background-color: #333333;
  border: none;
  word-break: break-all;
`;

const Flex2 = styled.div`
  width: 35rem;
  height: 100%;
`;
const JoinCrewTitle = styled.div`
  color: #666666;
  width: 12rem;
  margin: 1rem 85.7rem 1.5rem 7rem;
`;
const JoinCrewContent = styled.div`
color: #FFFFFF;
width: 47rem;
height: 9rem;
margin: 1.5rem 0 0rem 7rem;
overflow: auto;
::-webkit-scrollbar {
    display: none;
}
`
const LikeCrewTitle = styled(JoinCrewTitle)``
const LikeCrewContent = styled(JoinCrewContent)``

const LikeGymTitle = styled.div`
  color: #666666;
  width: 20rem;
  margin: 3rem 85.7rem 1.5rem 7rem;
`;
const LikeGymContent = styled.div`
color: #FFFFFF;
width: 83rem;
height: 12rem;
margin: 1.5rem 75.7rem 0 7rem;
overflow: auto;
::-webkit-scrollbar {
    display: none;
}
`
const Flex3 =styled.div`
width: 35rem;
height: 100%;
`

export default EditMypage;