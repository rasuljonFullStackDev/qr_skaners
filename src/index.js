import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoute from "./Layout/Layout";
import Home from './pages/Home';
import About from './pages/About';
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <AppRoute path='/home' element={<Home />} />
        <AppRoute path='/about' element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

