import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";

const Home = React.lazy(() => import("../Pages/Home/Home"))
const Gym = React.lazy(() => import("../Pages/GymPage/Gym"))
const Crew = React.lazy(() => import("../Pages/CrewPage/Crew"))
const CrewDetail = React.lazy(() => import("../Pages/CrewPage/CrewDetail"))
const GymDetail = React.lazy(() => import("../Pages/GymDetailPage/GymDetail"))
const KakaoLogin = React.lazy(() => import("../Pages/Login/KakaoLogin"))
const CreateCrew = React.lazy(() => import("../Pages/CrewPage/CreateCrew"))
const CrewEdit = React.lazy(() => import("../Pages/CrewPage/CrewEdit"))
const Mypage = React.lazy(() => import ("../Pages/MyPage/Mypage"))
const ChatList = React.lazy(() => import("../Pages/Chatting/ChatList"))
const ChatRoom = React.lazy(() => import("../Pages/Chatting/ChatRoom"))
const TermsOfUse = React.lazy(() => import("../Pages/Register/TermsOfUse"))
const Userprivacy = React.lazy(() => import("../Pages/Register/Userprivacy"))
const Loading = React.lazy(() => import("./Loading"))

const Router = () => {
  return (
    
    <Suspense fallback={<Loading />}>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/crews" element={<Crew />} />
          <Route path={"/crews/:crewId"} element={<CrewDetail />} />
          <Route path="/gyms" element={<Gym />} />
          <Route path={"/gyms/:gymId"} element={<GymDetail />} />
          <Route path="/kakaoLogin" element={<KakaoLogin />} />
          <Route path="/createcrew" element={<CreateCrew />} />
          <Route path={"/crewedit/:id"} element={<CrewEdit />} />
          <Route path={"/members/:memberId"} element={<Mypage />} />
          <Route path="/chat" element={<ChatList />} />
          <Route path={"/chat/:roomId"} element={<ChatRoom />} />
          <Route path="/terms/terms-of-use" element={<TermsOfUse />} />
          <Route path="/terms/user-privacy" element={<Userprivacy />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
