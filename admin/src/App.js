import "./App.css";
import Topbar from "./components/topbar/Topbar";
import SideBar from "./components/sidebar/SideBar";
import Home from "./pages/home/Home";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <SideBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/products/:productsId">
            <User />
          </Route>
          <Route path="/newproduct">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
