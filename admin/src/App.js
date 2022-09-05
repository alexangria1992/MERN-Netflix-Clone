import "./App.css";
import Topbar from "./components/topbar/Topbar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <SideBar />
        {/* <div className="others">Other Pages</div> */}
        <Home />
      </div>
    </div>
  );
}

export default App;
