import "./App.css";
import Router from "./Shared/router";
import TopBotton from "./Shared/TopBotton";
import Chat from "./Shared/Chat";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Router />

      <TopBotton />

      <Chat/>
    </div>
  );
}

export default App;
