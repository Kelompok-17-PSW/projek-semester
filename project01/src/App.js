import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from '../components/Login';
import Register from './components/Register';
import Materi from './components/Materi';
import Informasi from './components/Informasi';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <Router>
      <div>
        <Navbar /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/informasi" element={<Informasi />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
