import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/login';
import Register from './components/Register';
import Materi from './components/Materi';
import Informasi from './components/Informasi';
import Tips from './components/Tips';
import Navbar from './components/Navbar';
import Narrative from './components/Narrative';
import SimplePastTense from './components/MateriPastTense/SimplePastTense';
import PastContinuousTense from './components/MateriPastTense/PastContinuousTense';
import PastPerfectTense from './components/MateriPastTense/PastPerfectTense';
import PastPerfectContinuousTense from './components/MateriPastTense/PastPerfectContinuousTense';


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
          <Route path="/tips" element={<Tips />} />
          <Route path='/bab1' element={<Narrative />} />
          <Route path='/simple-past-tense' element={<SimplePastTense />} />
          <Route path='/past-continuous-tense' element={<PastContinuousTense />} />
          <Route path='/past-perfect-tense' element={<PastPerfectTense />} />
          <Route path='/past-perfect-continuous-tense' element={<PastPerfectContinuousTense />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
