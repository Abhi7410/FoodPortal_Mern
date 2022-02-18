import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import "./App.css";

import UsersList from "./components/users/UsersList";
import Home from "./components/common/Home";
import Register from "./components/common/Register";
import Navbar from "./components/templates/Navbar";
import Profile from "./components/users/Profile";
import Login from "./components/common/Login";
import Addfood from "./components/users/Addfood";
import Dashboard from "./components/users/Dashboard";
import Vendorfoodpage from "./components/users/Vendorfoodpage";
import Buyerfoodpage from "./components/users/Buyerfoodpage";
import BuyerOrder from "./components/users/BuyerOrders";
import VendorOrders from "./components/users/VendorOrders";
import Stats from "./components/users/stats";
// import Navbar from "./templates/Navbar";
//  import "@fontsource/roboto";
// importing paper and container from core







import 'bootstrap/dist/css/bootstrap.min.css';

const Layout = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="container">
        <Outlet />
        
      </div>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />

          <Route path="users" element={<UsersList />} />
          <Route path="register" element={<Register />} />
          <Route path="profile" element={<Profile />} />
          <Route path="login" element={<Login />} />
          <Route path="food_add" element={<Addfood />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="vendormenu" element={<Vendorfoodpage />} />
          <Route path="buyermenu" element={<Buyerfoodpage />} />
          <Route path="myOrders" element={<BuyerOrder />} />
          <Route path="vendorOrders" element={<VendorOrders />} />
          <Route path="stats" element={<Stats />} />

          








          

          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
