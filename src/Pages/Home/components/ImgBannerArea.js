import 메인광고배너 from "../../../Image/메인광고배너.png"
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styled from "styled-components";

const ImgBannerArea = () => {

//framer motion
const scrollRef = useRef(null)
    
    return(
        <Wrap ref={scrollRef} style={{ overflow: "scroll" }}>
            <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ root: scrollRef }}
            >
                <img src={메인광고배너} style={{width:'100%', height:'100%'}}/>
            </motion.div>
        </Wrap>
    )
}

const Wrap = styled.div`
max-width: 192rem;
width: 100vw;
height: 100rem;
margin: 0 auto;

`

export default ImgBannerArea;