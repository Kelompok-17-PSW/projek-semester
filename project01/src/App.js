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
import Tenses from './components/Tenses';
import SimplePastTense from './components/MateriPastTense/SimplePastTense';
import PastContinuousTense from './components/MateriPastTense/PastContinuousTense';
import PastPerfectTense from './components/MateriPastTense/PastPerfectTense';
import PastPerfectContinuousTense from './components/MateriPastTense/PastPerfectContinuousTense';
import SimpleFuture from './components/MateriFuture/SimpleFuture';
import FuturePerfect from './components/MateriFuture/FuturePerfect';
import FutureContinuous from './components/MateriFuture/FutureContinuous';
import Kuis from './components/Kuis';
import FuturePerfectContinuos from './components/MateriFuture/FuturePerfectContinuous';
import SimplePresentTense from './components/MateriPresent/SimplePresentTense';
import PresentContinuousTense from './components/MateriPresent/PresentContinuousTense';
import PresentPerfectContinuousTense from './components/MateriPresent/PresentPerfectContinuousTense';
import PresentPerfectTense from './components/MateriPresent/PresentPerfectTense';
import KuisSimpleFuture from './components/Quis/KuisSimpleFuture';
import KuisFuturePerfect from './components/Quis/KuisFuturePerfect';
import KuisFutureContinuous from './components/Quis/KuisFutureContinuous';


const App = () => {
  const isAuthPage = ["/login", "/register"].includes(window.location.pathname);

  return (
    <Router>
      <div>
        {/* Navbar will only render if the current page is not login or register */}
        {!isAuthPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/informasi" element={<Informasi />} />
          <Route path="/tips" element={<Tips />} />
          <Route path="/bab1" element={<Narrative />} />
          <Route path="/tenses" element={<Tenses />} />
          <Route path="/simple-past-tense" element={<SimplePastTense />} />
          <Route path="/past-continuous-tense" element={<PastContinuousTense />} />
          <Route path="/past-perfect-tense" element={<PastPerfectTense />} />
          <Route path="/past-perfect-continuous-tense" element={<PastPerfectContinuousTense />} />
          <Route path="/simple-future" element={<SimpleFuture />} />
          <Route path='/future-continuous-tense' element={<FutureContinuous />} />
          <Route path="/simple-present-tense" element={<SimplePresentTense />} />
          <Route path="/present-continuous-tense" element={<PresentContinuousTense />} />
          <Route path="/present-perfect-tense" element={<PresentPerfectTense />} />
          <Route path="/present-perfect-continuous-tense" element={<PresentPerfectContinuousTense />} />
          <Route path="/kuis" element={<Kuis />} />
          <Route path="/kuis-simple-future" element={<KuisSimpleFuture />} />
          <Route path="/future-perfect-tense" element={<FuturePerfect/>} />
          <Route path="/future-perfect-continuous" element={<FuturePerfectContinuos/>} />
          <Route path="/kuis-future-perfect" element={<KuisFuturePerfect />} />
          <Route path="/kuis-future-continuous" element={<KuisFutureContinuous />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;