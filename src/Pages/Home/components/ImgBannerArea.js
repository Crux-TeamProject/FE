import 메인광고배너 from "../../../Image/메인광고배너.png"
import styled from "styled-components";

const ImgBannerArea = () => {

    
    return(
        <Wrap>
                <img 
                src={메인광고배너} 
                alt="클라이밍짐 광고 배너입니다"
                style={{width:'100%', height:'100%'}}/>
        </Wrap>
    )
}

const Wrap = styled.div`
max-width: 192rem;
width: 100%;
height: 100rem;
margin: 0 auto;
@media(max-width:768px){
    height: 68rem;
}
`

export default ImgBannerArea;