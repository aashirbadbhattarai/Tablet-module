import React from "react";
import "./index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Layout from "./Components/Layout/Layout";
import TableList from "./Components/TableList/TableList";
import UserStatus from "./Components/UserStatus/UserStatus";
import OrderStatus from "./Components/OrderStatus/OrderStatus";
import ProductMenu from "./Components/ProductMenu/ProductMenu";
import Menu from "./Components/ProductMenu/Menu";
import ServerLogin from "./Components/Login/ServerLogin"; 
import CompanySelection from "./Components/SelectionArea/CompanySelection";
import CounterSelection from "./Components/SelectionArea/CounterSelection";

const App = () => {
  return (
    <Router>
      <div className="flex h-screen w-screen">
        <Routes>
          <Route path="/" element={<ServerLogin />} />

          <Route path="/dashboard" element={
            <>
              <Navbar />
              <Layout />
            </>
          }>
            <Route path="table-list" element={<TableList />} />
            <Route path="user-status" element={<UserStatus />} />
            <Route path="order-status" element={<OrderStatus />} />
            <Route path="product-menu" element={<ProductMenu />} />
            <Route path="item-menu" element={<Menu />} />
          </Route>
        <Route path="company-selection" element={<CompanySelection/>} />
        <Route path="server-login" element={<ServerLogin/>} />
        <Route path="counter-selection" element={<CounterSelection/>}/>

        </Routes>
      </div>
    </Router>
  );
};

export default App;
