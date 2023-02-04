import styled from "styled-components";
import * as Styled from "./PopularCrew"
import Loading from "../../../Shared/Loading";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef, useCallback } from "react";
import React from "react";
import { GetAxios } from "../../../Shared/api/main";


const PopularCrew = ({searchData}) => {
  
    const navigate = useNavigate();
  
    const [list, setList] = useState([]);
    // console.log(list)
  
    // 무한스크롤 적용하기
      const [page, setPage] = useState(0); //현재 페이지
      // console.log(page)
      const obsRef = useRef(null); 	//observer Element
  
      const [load, setLoad] = useState(false); //로딩 스피너
      const preventRef = useRef(false); //옵저버 중복 실행 방지
      const endRef = useRef(false); //모든 글 로드 확인
  
      useEffect(()=> { //옵저버 생성
        const observer = new IntersectionObserver(obsHandler, { threshold : 0.8 });
        if(obsRef.current) observer.observe(obsRef.current);
        return () => { observer.disconnect(); preventRef.current = true}
      }, [])
  
      useEffect(()=> {
          newCrew();
      }, [page])
  
    
      const obsHandler = ((entries) => { //옵저버 콜백함수
        const target = entries[0];
        if(!endRef.current && target.isIntersecting && preventRef.current){ //옵저버 중복 실행 방지
          preventRef.current = false; //옵저버 중복 실행 방지
          setTimeout(() => {
            setPage(prev => prev+1 ); //페이지 값 증가  
          }, 0);
          //setPage => setLastId 에 lastId max 받아다가  
        }
    })

    const newCrew = useCallback(async () => {
        // if(page !== 0 || page !== 1 ) {
        //   setLoad(true);
        // }
        await GetAxios(`crews?page=${page}&size=6`)
          .then((res) => {
            setList((prev) => [...prev, ...res.data.data.content]);
            if(res.data.data.content.length < 6) {
              endRef.current = true
            }
            preventRef.current = true;
          })
          .catch((err) => {
            // console.log(err);
          }) 
          // setLoad(false);
      }, [page])


return (
    <Styled.Container >
        <Styled.Wrap>
        {
            searchData?.length !== 0 ? 
            
            (searchData?.map((val, i) => (
                // <React.Fragment key={i}>
                  <Styled.CrewList key={i}
                    onClick={() => {navigate(`/crews/${val.id}`)}}>
                    <img
                      src={val.imgUrl}
                      alt=""
                      style={{ width: "38rem", height: "38rem" }}
                    />
                    <Styled.HashWrap >
                      <Styled.HashTag>#{val.keywords[0]}&nbsp;</Styled.HashTag>
                      <Styled.HashTag>#{val.keywords[1]}&nbsp;</Styled.HashTag>
                      <Styled.HashTag>#{val.keywords[2]}&nbsp;</Styled.HashTag>
                    </Styled.HashWrap>
                    <h3 style={{ margin: "2rem 0 0 0" }}>{val.name}</h3>
                    <p style={{ margin: "0.5rem 0 0 0", height:'2rem', overflow:'hidden' }}>{val.content}</p>
                    <p style={{ margin: "1rem 0 0 0" }}>
                      🖤 {val.likeNum}명 
                        <span style={{margin:'0 0.4rem 0 0.6rem'}}>|</span> 
                      🙍‍♀️ {val.crewNum}명
                    </p>
                  </Styled.CrewList>
                // </React.Fragment>
              ))) 
            
            :
    // 검색한 크루가 있으면 검색 된 크루를 보여줍니다
              list?.map((val, i) => (
                // <React.Fragment key={i}>
                  <Styled.CrewList key={i}
                    onClick={() => {navigate(`/crews/${val.id}`)}}>
                    <img
                      src={val.imgUrl}
                      alt=""
                      style={{ width: "38rem", height: "38rem" }}
                    />
                    <Styled.HashWrap >
                      <Styled.HashTag>#{val.keywords[0]}&nbsp;</Styled.HashTag>
                      <Styled.HashTag>#{val.keywords[1]}&nbsp;</Styled.HashTag>
                      <Styled.HashTag>#{val.keywords[2]}&nbsp;</Styled.HashTag>
                    </Styled.HashWrap>
                    <h3 style={{ margin: "2rem 0 0 0" }}>{val.name}</h3>
                    <p style={{ margin: "0.5rem 0 0 0", height:'2rem', overflow:'hidden' }}>{val.content}</p>
                    <p style={{ margin: "1rem 0 0 0" }}>
                      🖤 {val.likeNum}명 
                        <span style={{margin:'0 0.4rem 0 0.6rem'}}>|</span> 
                      🙍‍♀️ {val.crewNum}명
                    </p>
                  </Styled.CrewList>
                // </React.Fragment>
              ))

        }
                        
            <div ref={obsRef} ></div>

            { load && <Loading />}
          
        </Styled.Wrap>
      </Styled.Container>
    )
}


export default PopularCrew;