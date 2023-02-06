import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";
import 슬라이더왼쪽버튼 from "../../../Image/btn_left.png"
import 슬라이더오른쪽버튼 from "../../../Image/btn_right.png"
import 슬라이더정지버튼 from "../../../Image/btn_stop.png"
import 슬라이더재생버튼 from "../../../Image/재생버튼.png"
import 메인슬라이더1 from "../../../Image/메인슬라이더1.png"
import 메인슬라이더2 from "../../../Image/메인슬라이더2.png"
import 메인슬라이더3 from "../../../Image/메인슬라이더3.png"
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const NavSlider = () => {
    
    const sliderImg = [메인슬라이더1, 메인슬라이더2, 메인슬라이더3]
    const [index, setIndex] = useState(0)
    const handleNextSlide = () => {
        setIndex(prev => prev === 2 ? 0 : prev + 1)
    } 
    const handlePrevSlide = () => {
        setIndex(prev => prev === 0 ? 2 : prev - 1)
    }

    // autoCarousel
    const [playCarousel, setPlayCarousel] = useState(true);
    const handlePlayCarousel = () => {
        setPlayCarousel(prev => !prev);
    };

    useEffect(()=>{
        if(playCarousel) {
            let auto = setInterval(() => {
                handleNextSlide()
            }, 4000);
            return () => clearInterval(auto)
        }
    },[playCarousel])

return(
        <Wrap
        img={sliderImg[index]}
        >
            <ContentArea>
                <ContentArea2>
                <Mid>지금이 바로 <br/>CRUX와 함께 할 때!</Mid>
                <Bottom>클라이밍을 즐겁게 시작하고 싶다면 <br/>지금 바로 도전해보세요!</Bottom>
                
                <BtnBox>
                    <PrevBtn img={슬라이더왼쪽버튼} onClick={handlePrevSlide}/>
                    {
                        playCarousel ?
                        <StopBtn img={슬라이더정지버튼} onClick={handlePlayCarousel}/> :
                        <PlayBtn img={슬라이더재생버튼} onClick={handlePlayCarousel}/>
                    }
                    <NextBtn img={슬라이더오른쪽버튼} onClick={handleNextSlide}/>
                </BtnBox>
                </ContentArea2>
            </ContentArea>
            
        </Wrap>
    );
}

const Wrap = styled.div`
background-image: url(${props=>props.img});
width: 100%;
height: 100rem;
transition-duration: 1s;
`
const ContentArea = styled.div`
width: 100%;
margin: 0 auto;
position: absolute;
top: 20rem;
color: #ffffff;
font-size: 20px;
font-weight: 500;
`
const ContentArea2 = styled.div`
width: 120rem;
margin: 0 auto;
` 
const Mid = styled.div`
margin: 16rem 0 0 0;
font-size: 48px;
`
const Bottom = styled.div`
margin: 3rem 0 0 0;
`
const BtnBox = styled.div`
width: 120rem;
margin: 19rem auto 0 auto;
display: flex;
`
const NextBtn = styled.div`
width: 28px;
height: 28px;
background-image: url(${props=>props.img});
background-position: center;
background-size: cover;
cursor: pointer;
`;
const PrevBtn = styled(NextBtn)``;
const StopBtn = styled(NextBtn)`
width: 1rem;
height: 2.4rem;
margin: 2px 20px 0 20px;
`
const PlayBtn = styled(NextBtn)`
width: 28px;
height: 26px;
margin: 2px 7px 0 15px;
`



export default NavSlider;