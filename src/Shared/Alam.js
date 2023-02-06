import styled from "styled-components";
import { useState, useEffect } from "react";
import Loading from "../Shared/components/AlamLoading";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  __getAlam,
  _readAlam,
  _deleteAlam,
  _deleteAlams,
  _minusAlam,
} from "../Redux/modules/notification";
import axios from "axios";
import { DeleteAxios, GetAxios, PostAxios } from "./api/main";

const Alam = ({ setShowAlam, alams, NreadAlams }) => {
  const BASE_URL = "https://sparta-tim.shop";
  // const BASE_URL = 'https://01192mg.shop'

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const closeModal = () => {
    setShowAlam(false);
  };

  const onclickReadAlam = (notificationId) => {
    readAlam(notificationId);
    dispatch(_readAlam(notificationId));

    const a = alams?.data?.findIndex((v) => v.id === notificationId);
    if (!alams?.data[a]?.status) {
      dispatch(_minusAlam(1));
    }
  };

  const onclickDeleteAlam = (notificationId) => {
    deleteAlam(notificationId);
    dispatch(_deleteAlam(notificationId));

    const a = alams?.data?.findIndex((v) => v.id === notificationId);
    if (!alams?.data[a]?.status) {
      dispatch(_minusAlam(1));
    }
  };

  const onclickDeleteAlams = () => {
    deleteAlams();
    dispatch(_deleteAlams());
    dispatch(_minusAlam(NreadAlams.data.count));
  };

  const readAlam = async (notificationId) => {
    await PostAxios(`notifications/${notificationId}`, null)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const deleteAlam = async (notificationId) => {
    await DeleteAxios(`notifications/${notificationId}`)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        // console.log(err);
      });
  };
  const deleteAlams = async () => {
    await DeleteAxios(`notifications`)
      .then((res) => {
        // console.log(res)
      })
      .catch((err) => {
        // console.log(err);
      });
  };

  return (
      <AlamBox 
      onClick={closeModal}
      count={alams?.data.length}
      >
        {alams?.data.length === 0 ? (
          <div
            style={{
              padding: "3rem 0 0 0",
              textAlign: "center",
              fontSize: "1.4rem",
            }}
          >
            아직 알람이 없습니다
          </div>
        ) : (
          <>
            <div style={{ fontSize: "2rem", margin: "4rem 0 2rem 2.5rem" }}>
              나의 알림
            </div>

            <AlamLists
            onClick={(e)=>{e.stopPropagation()}}
            >
              {alams?.data.map((alam) => {
                return (
                  <div key={alam.id}>
                    {!alam.status ? ( // 안 읽은 알람
                      <AlamList
                        onClick={() => {
                          onclickReadAlam(alam.id);
                          navigate(`/crews/${alam.content.crewId}`);
                        }}
                      >
                        <AlamContent>
                          <span>{alam.content.content}</span>
                          <AlamDelete
                            onClick={(e) => {
                              e.stopPropagation();
                              onclickDeleteAlam(alam.id);
                            }}
                          >
                            삭제
                          </AlamDelete>
                        </AlamContent>
                      </AlamList>
                    ) : (
                      // 읽은 알람
                      <AlamList
                        onClick={() => {
                          navigate(`/crews/${alam.content.crewId}`);
                        }}
                      >
                        <ReadAlamContent>
                          <span>{alam.content.content}</span>
                          <AlamDelete
                            onClick={(e) => {
                              e.stopPropagation();
                              onclickDeleteAlam(alam.id);
                            }}
                          >
                            삭제
                          </AlamDelete>
                        </ReadAlamContent>
                      </AlamList>
                    )}
                  </div>
                );
              })}
            </AlamLists>
          </>
        )}

        <AlamsDelete
          onClick={(e) => {
            e.stopPropagation();
            onclickDeleteAlams();
          }}
        >
          {alams?.data.length === 0 ? null : (
            <div style={{ textAlign: "center" }}>전체 삭제</div>
          )}
        </AlamsDelete>
      </AlamBox>
  );
};

const AlamBox = styled.div`
  width: 43rem;
  min-height: 14.1rem;
  max-height: 51rem;
  box-shadow: 10px 20px 20px rgba(0, 0, 0, 0.4);
  border-radius: 15px;
  position: absolute;
  top: ${props=>props.count === 0 ? "23.5rem" : props.count === 1 ? "29.5rem" : props.count === 2 ? "32.5rem" : props.count === 3 ? "35.5rem" : props.count === 4 ? "38.5rem" : "41.5rem"};
  transform: translate(-46%,-50%);
  background: #262626;
  color: #cccccc;
  overflow: hidden;
  z-index: 901;
  font-size: 1.2rem;
`;
const AlamLists = styled.div`
  max-height: 35rem;
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AlamList = styled.div`
  width: 38rem;
  height: 5.6rem;
  margin: 1rem auto;
  background-color: #333333;
  border-radius: 1.5rem;
  padding: 1.8rem 2rem 2rem 2rem;
  cursor: pointer;
`;
const AlamDelete = styled.span`
  float: right;
`;

const AlamsDelete = styled.div`
  font-size: 1.4rem;
  margin: 3rem 0 0 0rem;
  height: 6rem;
  background: linear-gradient(
    180deg,
    rgba(217, 217, 217, 0) -70.63%,
    rgba(20, 20, 20, 0) -70.62%,
    rgba(20, 20, 20, 0) 3.13%,
    rgba(20, 20, 20, 0) 13.79%,
    rgba(20, 20, 20, 0.443299) 52.01%,
    rgba(20, 20, 20, 0.463918) 53.79%,
    #141414 100%
  );
  cursor: pointer;
`;

const AlamContent = styled.div``;

const ReadAlamContent = styled.div`
  opacity: 0.3;
`;

export default Alam;
