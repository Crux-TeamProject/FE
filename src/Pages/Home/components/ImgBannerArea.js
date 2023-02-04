import 메인광고배너 from "../../../Image/메인광고배너.png"

const ImgBannerArea = () => {
    return(
        <div style={{maxWidth:'192rem', margin:'0 auto', height:'1000px', backgroundColor:'gray', color:'white'}}>
            <img src={메인광고배너} style={{width:'100%', height:'100%'}}/>
        </div>
    )
}

export default ImgBannerArea;