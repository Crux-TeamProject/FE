import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { __getGym } from "../../../Redux/modules/homeSlice";
import Loading from "../../../Shared/Loading";
import GymSlider from "./GymSlider";

const GymArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error, getGym } = useSelector((state) => state.getGym);
  const gym = getGym?.data;
  // console.log(gym)

  useEffect(() => {
    dispatch(__getGym());
  }, []);

  if (isLoading) {
    <Loading />;
  }

  return (
      <Container>
        <Background />

        <TextBox>
            <PopularGym>
                이번 달<br /> 인기 클라이밍짐
            </PopularGym>
            <Skill>볼더링 / 리드 / 스피드</Skill>
            <Desc>
                스포츠클라이밍은 누구나 재미있게 즐기며 몸매관리 및 다이어트에<br />
                매우 좋은 운동입니다.일일예약 및 단체 예약 후 이용 가능합니다.
            </Desc>
            <Explain>
                작성해주신 리뷰 평점을 바탕으로 <br />
                인기 클라이밍짐이 집계됩니다
            </Explain>
        </TextBox>

        <PGymSlider /> 
        
        {/* <GymSlider gyms={gym} /> */}

      </Container>

  );
};

const PGymSlider = styled.div`
width: 100rem;
height: 70rem;
float: right;
margin: 17rem auto;
border: 1px solid tomato;
`

const Container = styled.div`
max-width: 192rem;
height: 1030px;
background-color: #141414;
margin: 0 auto;
`;
const Background = styled.div`
width: 1290px;
height: 700px;
opacity: 0.1;
background-color: #fff;
`;

const TextBox = styled.div`
color: #fff;
width: 120rem;
margin: -52rem auto;
`;
const PopularGym = styled.div`
font-size: 4.8rem;
margin: 0 0 3rem 0;
`;
const Skill = styled.div`
font-size: 2rem;
margin: 0 0 1rem 0;
`;
const Desc = styled.div`
font-size: 1.4rem;
font-weight: 400;
`;
const Explain = styled(Desc)`
margin-top: 3rem;
`;

export default GymArea;
