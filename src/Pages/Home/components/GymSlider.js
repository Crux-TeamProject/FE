import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled, { keyframes } from "styled-components";
import 슬라이더왼쪽버튼 from "../../../Image/btn_left.png"
import 슬라이더오른쪽버튼 from "../../../Image/btn_right.png"
import 기본클라이밍짐 from "../../../Image/인기 클라이밍짐.png"
import { useNavigate } from "react-router-dom";

const SliderGym = ({ gyms }) => {
    const navigate = useNavigate()

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1.5,
        slidesToScroll: 1,
        nextArrow: (
            <Snext>
                <img src={슬라이더오른쪽버튼} style={{width:'2.5rem'}}/>
            </Snext>
        ),
        prevArrow: (
            <Sprev>
                <img src={슬라이더왼쪽버튼} style={{width:'2.5rem'}}/>
            </Sprev>
        ),
      };

    return(
        <StyledSlider {...settings}>
            {
                gyms?.map((gym,i)=>{
                    return(
                        <Wrap key={gym.lat}>
                            <GymImg 
                            img={gym.imgUrl !== null ? gym.imgUrl : 기본클라이밍짐} 
                            >
                                <GymName onClick={()=>{navigate(`/gyms/${gym.id}`)}}> 
                                    {gym.name} (평점: {Number(gym.avgScore).toFixed(2)}점)
                                    <GymNavi>바로가기</GymNavi>
                                </GymName>
                            </GymImg>
                        </Wrap>
                    )
                })
            }
        </StyledSlider>
    );
}
const GymImg = styled.div`
background-image: url(${props => props.img});
background-position: center;
background-size: cover;
width: 630px;
height: 630px;
` 
const blinkEffect = keyframes`
    0% {
        color: white;
    }
    50% {
        color: #ffb800;
    }
    100% {
        color: white;
    }
`
const StyledSlider = styled(Slider)`
max-width: 100rem;
width: 63%;
height: 70rem;
float: right;
margin: 17rem auto;
.slick-prev::before,
.slick-next::before{
    opacity: 0;
    display: none;
}
.slick-slide div {
    //슬라이더  컨텐츠
}

.slick-next {
    top: 61%;
    left: -30%;
}
.slick-prev {
    top: 61%;
    left: -41%;
}
`
const Wrap = styled.div`
margin: 0 10px;
:hover {
    color: #ffb800;
    span{
        color: white;
        animation: ${blinkEffect} 1s 1s infinite;
    }
}
cursor: pointer;
`

const GymName = styled.div`
font-size: 2rem;
margin: 1rem 0px 8px 3rem;
position: absolute;
z-index: 3;
`
const GymNavi = styled.span`
font-size: 1.6rem;
text-decoration: underline;
margin-left: 5px;
`

// const Snext = styled.div`
// width: 100%;
// height: 30px;
// position: absolute;
// top: 10%;
// z-index: 99;
// /* margin: 3% 1508px 0 0; */
// line-height: 30px;

// `;
// const Snext2 = styled.div`
// width: 120rem;
// margin: 0 auto;
// .slick-next {
//     right: none;
// }
// `
// const SnextImg = styled.div`
// background-image: url(${props => props.img});
// background-position: center;
// background-size: cover;
// width: 100px;
// height: 100px;
// z-index: 99;
// `

// const Sprev = styled.div`
// width: 30px;
// height: 30px;
// position: absolute;
// z-index: 99;
// margin: 3% 0 0 -520px;
// /* text-align: left; */
// line-height: 30px;
// `;


export default SliderGym;

const Snext = styled.div`
width: 30px;
height: 30px;
z-index: 99;
line-height: 30px;
`;

const Sprev = styled(Snext)`
width: 30px;
height: 30px;
position: absolute;
`