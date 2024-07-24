import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import PasswordPage from './pages/PasswordPage/PasswordPage'; 
import ProductsPage from './pages/ProductsPage/ProductsPage'; 

const App = () => {
  const location = useLocation();
  const showHeader = location.pathname === '/';

  return (
    <div>
      {showHeader && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Login />} /> {}
        <Route path="/password" element={<PasswordPage />} />
        <Route path="/produtos/:produtoNome?" element={<ProductsPage />} /> {}
      </Routes>
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;