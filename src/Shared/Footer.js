import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import 푸터영역 from "../Image/Footer@3x.png"

const Footer = () => {


    return(
        <Container>
            <Anker>
                <Git onClick={()=>{window.open('https://github.com/Crux-TeamProject/FE')}}></Git>
                <Hanghae99 onClick={()=>{window.open('https://hanghae99.spartacodingclub.kr/v2/exhibitions')}}></Hanghae99>
            </Anker>

        </Container>
    )
}

const Container = styled.div`
background-image: url(${푸터영역});
background-size: cover;
background-position: center;
width: 100%;
height: 40rem;
`

const Anker = styled.div`
display: flex;
width: 25rem;
height: 8rem;
margin: 0px auto;
top: 2.5rem;
left: 48rem;
position: relative;
cursor: pointer;
`

const Git = styled.div`
width: 58%;
background-color: transparent;
/* border: 2px solid teal; */
`
const Hanghae99 = styled.div`
width: 50%;
background-color: transparent;
/* border: 2px solid tomato; */
`
export default Footer;