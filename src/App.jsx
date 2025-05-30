import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Layout from './Components/Layout/Layout';
import TableList from './Components/TableList/TableList';
import UserStatus from './Components/UserStatus/UserStatus';
import OrderStatus from './Components/OrderStatus/OrderStatus';
import ProductMenu from './Components/ProductMenu/ProductMenu';
import Menu from './Components/ProductMenu/Menu';

const App = () => {
  return (
    <Router>
      <div className="flex h-screen w-screen">
        <Navbar />
        <Routes>
            <Route path="/" element={<Layout />}>
            <Route path="table-list" element={<TableList />} />
            <Route path="user-status" element={<UserStatus />} />
            <Route path="order-status" element={<OrderStatus />} />
            <Route path="product-menu" element={<ProductMenu />} />
            <Route path="item-menu" element={<Menu />}/>  
            </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
