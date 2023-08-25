import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { Route, Router, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login/Login';
import { AddCoupon } from './components/addcoupon/AddCoupon';
import { Layout } from './components/layout/Layout';




function App() {

  return (
    <div className="App">
      <Layout />

    </div>


  );
}
export default App;
