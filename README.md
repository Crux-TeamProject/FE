
##   ๐งโโ๏ธ CRUX

ํด๋ผ์ด๋ฐ ์ ์ ๋ค์ ์ํ ๋ชจ์, ์ ๋ณด ์ ๊ณต ์ปค๋ฎค๋ํฐ ์๋น์ค์๋๋ค.

<br>




## ๐บ ์์ฐ ์์ [ํ๋ ์  ํ์ด์ ์์๋ณด๊ธฐ](https://www.youtube.com/watch?v=DWAgb-X79Ok&t=16s)

<img src="https://user-images.githubusercontent.com/88928469/201088609-d9e8bafb-cb82-4c3d-aa5a-ec770e7fecb6.gif">

#### [ -> CRUX ๋ฐ๋ก๊ฐ๊ธฐ](https://youmadeit.shop/)

<br />

## ๐ ํ๋ก์ ํธ ๊ธฐ๊ฐ

> 2022.8.26 ~ 2022.10.07

<br />


## ๐ฎ ์ฃผ์๊ธฐ๋ฅ

- ์์ ๋ก๊ทธ์ธ์ด ๊ฐ๋ฅํฉ๋๋ค
- ํฌ๋ฃจ์๋ค๋ผ๋ฆฌ ์ค์๊ฐ ์ฑํ์ผ๋ก ์ํต ํ  ์ ์์ต๋๋ค
- SSE๋ฅผ ํตํด ์ค์๊ฐ ์๋์ ๋ฐ์ ์ ์์ต๋๋ค
- ์นด์นด์คMap์ ํตํด ์ ๊ตญ ํด๋ผ์ด๋ฐ์ง์ ํ๋์ ๋ณผ ์ ์์ต๋๋ค ([์์ฐ์์](https://www.youtube.com/watch?v=UJhx60YTabw), 
[Git์ฝ๋](https://github.com/Crux-TeamProject/FE/blob/master/src/Pages/GymPage/Gym.jsx))

<br />

## ๐ ๋ฐ๋ก๊ฐ๊ธฐ
- [Crux ์ด์ฉํ๋ฌ ๊ฐ๊ธฐ](https://youmadeit.shop/)
- [ํ๋ก ํธ์๋ GitHub](https://github.com/Crux-TeamProject/FE)
- [๋ฐฑ์๋ GitHub](https://github.com/Crux-TeamProject/BE)
- [ํ Notion](https://www.notion.so/6-b8b446f2809c49148f9be2cd678fe538)
- [API ๋ช์ธ์](https://www.notion.so/API-e5a62aa1845b47a5bc8c8dd10dbc22ac)

<br />

## ๐ง ๊ธฐ์ ์คํ
 <br>
<div align=center>

  <img src="https://img.shields.io/badge/React-60d3f3?style=for-the-badge&logo=react&logoColor=black">
 <img src="https://img.shields.io/badge/styledcomponents-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/ReduxToolkit-764ABC?style=for-the-badge&logo=Redux&logoColor=white"> 
  <img src="https://img.shields.io/badge/Axios-5B0BB5?style=for-the-badge&logo=Axios&logoColor=white">
  
  <br>

  
<img src="https://img.shields.io/badge/SockJs-02B78F?style=for-the-badge&logo=SockJs&logoColor=white">
<img src="https://img.shields.io/badge/Stomp-4A86CF?style=for-the-badge&logo=Stomp&logoColor=white">
   <img src="https://img.shields.io/badge/sse-010101?style=for-the-badge&logo=stomp&logoColor=white">
  <br>

 
  <img src="https://img.shields.io/badge/AWS%20S3-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=FF9A00"/>
  <img src="https://img.shields.io/badge/AWS%20CloudFront-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=FF9A00"/>
  <img src="https://img.shields.io/badge/AWS%20Route%2053-232F3E?style=for-the-badge&logo=AmazonAWS&logoColor=FF9A00"/>
 
  <br>
  <img src="https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white">
  <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white">
  <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white">
</div>
  
<br />

## ๐น ์๋น์ค ์ํคํ์ณ  
<img src="https://user-images.githubusercontent.com/109011766/194456262-69a3f74a-4772-4bf7-9e4f-1b667bae8567.png" width="800px"/>

<br />

## โ ๏ธ Trouble Shooting

<details>
<summary>SSE (Server-Sent Events) Message๋ฅผ ์ฌ๋ฌ๋ฒ ์์ ํ๋ ๋ฌธ์  ๋ฐ์</summary>

* ํด๊ฒฐ </br>
SSE ์ฐ๊ฒฐ ์ ํน์  ์ํฉ๋ง๋ค(๋๋๋ง์ ์๊ฐ์ ์ผ๋ก ์์ฃผ ๋ฐ์์ํค๋ ๊ฒฝ์ฐ) ์ค์ฒฉ ์ฐ๊ฒฐ๋์ด response๋ฅผ ์ฌ๋ฌ๋ฒ ์์ ํ๋ค๊ณ  ํ๋จ </br>
useEffect ์ clean up ํจ์๋ฅผ ์ฌ์ฉํ์ฌ component unmount์์ ์ฐ๊ฒฐ์ ๋์ด ์ค์ฒฉ ์ฐ๊ฒฐ ๋ฐฉ์งํ์ฌ ๋ฌธ์  ํด๊ฒฐ </br>

<img src="https://user-images.githubusercontent.com/109011766/194454090-9d2d6a40-70d9-4893-ad15-38ab547941b2.JPG"/>

</details>

</br>

<details>
<summary>input ์์์ ๊ฐํ์ ์ผ๋ก ํ์ดํ ์๋๊ฐ ๋๋ ค์ง๋ ํ์ </summary>
* ํด๊ฒฐ </br>
ref๊ธฐ๋ฐ์ react-hook-from ๋ผ์ด๋ธ๋ฌ๋ฆฌ๋ฅผ ์ฌ์ฉํ์ฌ ์ฌ์ฉ์๊ฐ ํธ๋ฆฌ๊ฑฐ์๊น์ง ๋ฆฌ๋ ๋๋ง์ ์ผ์ผํค์ง ์๋๋ก ํ์ฌ ํด๊ฒฐ. </br>
<img src="https://user-images.githubusercontent.com/109011766/194454141-5d2af974-0fec-4e62-89b7-bcaa0c183387.JPG"/>
</br>
</details>

</br>


## ๐โ ์ ์ ํผ๋๋ฐฑ

<br>

* ํผ๋๋ฐฑ ์์ง์ผ์ : 2022๋ 10์ 05์ผ ~ 2022๋ 10์ 14์ผ
* ํผ๋๋ฐฑ ์ : ์ด 31๊ฐ

< ํฌ๋ญ์ค์์ ๋ง์กฑ์ค๋ฌ์ ๋ ๋ถ๋ถ >
* ์์น ๊ธฐ๋ฐ์ ์ด์ฉํ ๊ฒ์ ์๋น์ค
* ๊ฐํธํ ๋ชจ์ ๊ฐ์๊ณผ ์ ์  ๊ฐ ์ฐ๊ฒฐ
* ๊น๋ํ ๋์์ธ/UI

<br />

< ์ ์  ํผ๋๋ฐฑ ๊ฐ์ ์ฌํญ >

<details>
 <summary>์ฌ๋ผ์ด๋๊ฐ ๋ง์ฐ์ค๋ก ๋์ด๊ฐ์ผ๋ฉด ์ข๊ฒ ์ด์!</summary>
 
 </br>
 
 - navigation์ ๋ฐ๋ก๊ฐ๊ธฐ ํด๋ฆญ์๋ก ๋ณ๊ฒฝํ๊ณ  keyframe์ผ๋ก ๋ฐ๋ก๊ฐ๊ธฐ๋ฅผ ํ๋์ ๋ณผ ์ ์๊ฒ ์ฒ๋ฆฌ </br>
   (๊ธฐ์กด์๋ navigateion์ ์ ์ฒด์ฌ์ง์ ์ค์ ํด ๋ง์ฐ์ค๋ก ์ฌ๋ผ์ด๋ ํ๋ฉด mouseUp ์์ ํด๋น navi๋ก ์ด๋)
 ![ezgif com-gif-maker](https://user-images.githubusercontent.com/88928469/210228710-1bfd67c2-3c49-4998-a90c-7d86c8ba07fe.gif)
</details>

<details>
 <summary> Top ๋ฒํผ ์ฑํ ๋ฒํผ ์์น๊ฐ ๊ฑฐ์ฌ๋ ค์.. </summary>
 
 </br>
 
 - ์ ์ ์ ๋ฐ๋ผ ๋ฒํผ ์์น๋ฅผ ์ปค์คํ ํ๋๊ฒ ์ข๊ฒ ๋ค๊ณ  ํ๋จํ์ฌ drabble ๋์ํ์ฌ ํด๊ฒฐํ์์ </br>
 ![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/88928469/210230785-148381b4-8487-4fbe-a05f-6e5ba2cac48f.gif)

 
</details>

<details>

<summary>์ฌ์ง ์๋ก๋๊ฐ ์๋ผ์</summary>

</br>

 - Firebase๋ก ์๋ก๋ ๋๋ ์๊ฐ ์ฌ์ด์ ์ฌ์ง์ ๋ฑ๋กํ์ฌ ์ฌ์ง ์๋ก๋๊ฐ ์๋๋ ๋ฌธ์ ๋ก ์ฌ์ง์ด ์๋ก๋๋๋ ๋์ loading spiner์ฒ๋ฆฌ
 
   <img src="https://user-images.githubusercontent.com/88928469/201101894-274d44cc-9f40-41f4-87ea-d2c29367efe0.png" width="250px">
</details>

<details>
<summary>์ฑํ ๊ด๋ จ ๋ฌธ์</summary>

</br>

 > ์ฑํ์ ์ด๋ป๊ฒ ํ  ์ ์๋์?
 - ์ฒ์ ๊ฐ์ํ ์ฌ์ฉ์์ ๊ฒฝ์ฐ ๊ฐ์ํ ํฌ๋ฃจ๊ฐ ์์ด ์ฑํ๊ธฐ๋ฅ์ ์ธ์ ์ ํ, ์๋ด ๋ฌธ๊ตฌ๋ฅผ ์ถ๊ฐํ์ฌ ํฌ๋ฃจ ๊ฐ์ ์ฅ๋ ค 
 
 ![image](https://user-images.githubusercontent.com/88928469/201099305-3378c11a-70c3-476d-86d9-1326c6b352f9.png)
 
 > ์  ์ฑํ๊ณผ ์๋ ์ฑํ์ด ๊ตฌ๋ถ์ด ์ ์๊ฐ์!
 - ๋ณธ์ธ ์ฑํ ์๋์ ๊ฐ์ด ๊ตฌ๋ถํ์ฌ ํด๊ฒฐ
 
 ![image](https://user-images.githubusercontent.com/88928469/201099737-8e9d35cc-7b62-4fcf-ac16-0a4dee65bc42.png)
</details>

<br />

##  ๐โโ๏ธ๐โโ๏ธํ์(FE)

|ํ์ |๊นํ๋ธ|์ญํ ๋ถ๋ด|
|---|---|---|
|์ด์ฉ๊ท๐ฐ|[Github](https://github.com/chipmunkcol)&nbsp;| ์นด์นด์คMap, ์ค์๊ฐ ์๋, ๋ฉ์ธ/ํฌ๋ฃจ/ํด๋ผ์ด๋ฐ์ง/๋ฆฌ๋ทฐ/๋ง์ด ํ์ด์ง  |
|์ํจ๋ฆผ|[Github](https://github.com/hyolimlim)|์์๋ก๊ทธ์ธ, ํ์๊ฐ์, ์ค์๊ฐ ์ฑํ, ํฌ๋ฃจ ์์ฑ ๋ฐ ํฌ๋ฃจ ๋ํ์ผ(์๊ฐ/์ฐธ์ฌ๋ฉค๋ฒ/๋ชจ์๊ณต์ง/์ฌ์ง์ฒฉ) ํ์ด์ง|

<br>
<br>
