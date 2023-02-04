import "./App.css";
import Router from "./Shared/router";
import TopBotton from "./Shared/TopBotton";
import Chat from "./Shared/Chat";
import Navbar from "./Shared/Navbar";
import Footer from "./Shared/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Router />

      <TopBotton />

      <Chat/>

      <Footer />
    </>
  );
}

export default App;
