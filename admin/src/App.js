import "./App.css";
import Topbar from "./components/topbar/Topbar";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <SideBar />
        <div className="others">Other Pages</div>
      </div>
    </div>
  );
}

export default App;
