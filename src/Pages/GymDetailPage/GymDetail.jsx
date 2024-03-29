
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../../Shared/Navbar";
import { __getGymDetail } from "../../Redux/modules/gymDetilSlice";
import Content from "./components/Content";
import Review from "./components/Review";
import Loading from "../../Shared/Loading.js"
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../../Shared/Footer";
import styled from "styled-components";

const GymDetail = () => {

    const [showReview, setShowReview] = useState(false)
    const [reload, setReload] = useState(false)
    const params = useParams().gymId
    // console.log(params)
    const dispatch = useDispatch()

    const { isLoading, error, gymDetail } = useSelector((state) => state.gymDetail)
    // console.log(isLoading, error, gymDetail)

    const gym = gymDetail?.data
    // console.log(gym?.likeGym)


    useEffect(() => {
        dispatch(__getGymDetail(params))
    }, [reload])

    if (gym === undefined)
        return (
            <Loading />
        )
    return (
        <Wrap>

            {/* content 영역 입니다 */}
            <Content gym={gym} setShowReview={setShowReview} showReview={showReview} setReload={setReload} reload={reload} />

            {/* review 영역 입니다 */}
            {
                showReview === true ? null :
                    <>
                        <Img src="https://www.pngmart.com/files/15/Arrow-Down-PNG-Picture.png" />
                        <Review gym={gym} setReload={setReload} reload={reload} />
                    </>
            }

        </Wrap>
    );
}

const Wrap = styled.div`
width: 100%;
`

const Img = styled.img`
width: 2rem;
height: 2rem;

display: block;
margin: 1rem auto;
`

export default GymDetail;
