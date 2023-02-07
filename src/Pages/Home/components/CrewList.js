import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Loading from "../../../Shared/Loading"
import 인기크루 from "../../../Image/인기크루.png"
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const CrewList = ({crews}) => {

const navigate = useNavigate()

//framer-motion
const ref = useRef(null)
const isView = useInView(ref)

const motionBox = {
    initial: { opacity: 0 },
    animate: {
        opacity: 1,
        transition: {
            duration: 0.3,
            delayChildren: 0.3,
            staggerChildren: 0.2
        }
    }
}
const motionCircle = {
    initial: {opacity: 0, y: 20},
    animate: {opacity: 1, y: 0}
}

if(crews?.length === 0) { <Loading /> }

return (
    <Wrap
    ref={ref}
    variants={motionBox}
    initial="initial"
    animate={isView ? "animate" : "none"}
    >
        {
                crews?.map((crew,i)=>(
                            <CrewImg 
                            key={`${crew.id}+${crew.crewNum}`}
                            variants={motionCircle}
                            >
                                <img src={crew.imgUrl !== "" ? crew.imgUrl : 인기크루} alt="" style={{width:'25rem', height:'250px', margin:'0 10px', borderRadius:'60%'}}
                                    onClick={()=>{navigate(`/crews/${crew.id}`)}}/>
                                <div>
                                    <Snumber>{i+1}</Snumber>
                                    <div style={{textAlign:'center', color:'white'}}>
                                        <CrewName >{crew?.name}</CrewName>
                                        <div>좋아요 {crew?.likeNum}개</div>
                                    </div>
                                </div>
                                
                            </CrewImg>
                ))
        }
    </Wrap>
    )
}
export const Wrap = styled(motion.div)`
width: 121rem;
margin: 12px auto;
display: flex;
`
export const CrewImg = styled(motion.div)`
width: 27.4rem;
height: 40rem;
margin: 0 7rem 0 0;
:hover {
    transform: scale(1.05);
    transition: 0.5s;
  }
cursor: pointer;
`
export const CrewName = styled.div`
margin: 0px auto 14px auto;
overflow: hidden;
width: 13rem;

` 
export const Snumber = styled.div`
width: 56px;
height: 135px;
opacity: 0.05;
font-family: Poppins;
font-size: 180px;
font-weight: 600;
font-stretch: normal;
font-style: normal;
line-height: normal;
letter-spacing: -9px;
text-align: left;
color: #fff;
margin: -104px 0 0 -10px;
`

export default CrewList;