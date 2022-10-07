# 🧗‍♂️ CRUX! 🧗‍♂️

### 클라이밍 유저들을 위한 모임, 정보 제공 커뮤니티 서비스입니다.

<br>

## [CRUX로 클라이밍 시작하기](https://youmadeit.shop/)

<img src= "https://user-images.githubusercontent.com/67731994/194262200-818f0c6f-dd12-4e8d-8423-dbf0e6c4c40e.png" width="700" height="530"/>

<br>

-----

## :rocket: 프론트엔드 팀원소개
|팀원|깃허브|역할분담|
|-----|---|---|
|이용규🔰|[Github](https://github.com/chipmunkcol)|위치기반 클라이밍짐 찾기, 클라이밍짐 리뷰, 알림기능, 마이페이지|
|임효림|[Github](https://github.com/01192mg)|회원가입, 크루 채팅,  크루 생성 및 크루 디테일|

<br>
<br>

------

## :rocket: 개발기간
2022.8.26 ~ 2022.10.07

<br>

------

## :rocket: 아키텍처
<img src="https://user-images.githubusercontent.com/109011766/194456262-69a3f74a-4772-4bf7-9e4f-1b667bae8567.png" width="800px"/>
<br>

------

## :rocket: API 명세서
<br>
[API 명세서 바로가기](https://www.notion.so/API-e5a62aa1845b47a5bc8c8dd10dbc22ac)

<br>

------

## :rocket: 주요기능
<br>

- 소셜 로그인
- 크루 생성 & 참가
- 크루 상세페이지
  - 크루 참가신청, 사진, 모임일정 등록
- 크루 실시간 채팅방
- 클라이밍짐 리스트
  - 클라이밍짐을 지역별로 볼 수 있음
  - 클라이밍짐의 후기를 남길 수 있음
- 마이페이지 
  - 내 프로필 수정 
  - 내가 참가한 크루모임 & 즐겨찾기 한 클라이밍짐을 볼 수 있음

<br>

------

## :rocket: Front-end 기술스택
<br>

<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white"> <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=ReduxToolkit&logoColor=white">
<img src="https://img.shields.io/badge/StyledComponent-DB7093?style=for-the-badge&logo=StyledComponent&logoColor=white">
<img src="https://img.shields.io/badge/stomp-010101?style=for-the-badge&logo=stomp&logoColor=white">
<img src="https://img.shields.io/badge/sockjs-010101?style=for-the-badge&logo=sockjs&logoColor=white">
<img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=sockjs&logoColor=white">

</br>

------
##  :rocket: 트러블 슈팅
<details>
<summary>SSE (Server-Sent Events) Message를 여러번 수신하는 문제 발생</summary>

* 해결 </br>
SSE 연결 시 특정 상황마다(랜더링을 순간적으로 자주 발생시키는 경우) 중첩 연결되어 response를 여러번 수신한다고 판단 </br>
useEffect 의 clean up 함수를 사용하여 component unmount시에 연결을 끊어 중첩 연결 방지하여 문제 해결 </br>

<img src="https://user-images.githubusercontent.com/109011766/194454090-9d2d6a40-70d9-4893-ad15-38ab547941b2.JPG"/>

</details>

</br>

<details>
<summary>input 안에서 간헐적으로 타이핑 속도가 느려지는 현상 </summary>
* 해결 </br>
ref기반의 react-hook-from 라이브러리를 사용하여 사용자가 트리거시까지 리렌더링을 일으키지 않도록 하여 해결. </br>
<img src="https://user-images.githubusercontent.com/109011766/194454141-5d2af974-0fec-4e62-89b7-bcaa0c183387.JPG"/>
</br>
</details>

</br>

------
##  :rocket: 유저 피드백

<br>

* 피드백 수집일자 : 2022년 10월 05일 ~ 2022년 10월 07일
* 피드백 수 : 총 20개

< 크럭스에서 만족스러웠던 부분 >
* 위치 기반을 이용한 검색 서비스
* 간편한 모임 가입과 유저 간 연결
* 깔끔한 디자인/UI

< 개선사항 >
* 사진 업로드가 안돼요 </br>
▷ Firebase로 업로드 되는 시간 사이에 사진을 등록하여 사진 업로드가 안되는 문제로 사진이 업로드되는 동안 loading spiner처리
</br>

* 채팅은 어떻게 할 수 있나요? </br>
▷ 처음 가입한 사용자의 경우 가입한 크루가 없어 채팅기능의 인식 저하, 안내 문구를 추가하여 크루 가입 장려 </br>


