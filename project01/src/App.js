import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/login';
import Register from './components/Register';
import Materi from './components/Materi';
import Vidio from './components/Vidio'
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
import KuisSimplePastTense from './components/Quis/KuisSimplePastTense';
import KuisPastContinuousTense from './components/Quis/KuisPastContinuousTense';
import KuisPastPerfect from './components/Quis/KuisPastPerfect';
import KuisPastPerfectContinuous from './components/Quis/KuisPastPerfectContinuous';
import KuisPerfectContinuous from './components/Quis/KuisPerfectContinuous';
import KuisSimplePresent from './components/Quis/KuisSimplePresent';
import KuisPresentContinuous from './components/Quis/KuisPresentContinuous';
import KuisPresentPerfect from './components/Quis/KuisPresentPerfect';
import KuisPresentPerfectContinuous from './components/Quis/KuisPresentPerfectContinuous';
import Footer from "./Footer";
import Tryout from "./components/Tryout";
import TOSimplefuture from './components/Tryout/TOSimplefuture';

const App = () => {
  const isAuthPage = ["/login", "/register"].includes(window.location.pathname);

  return (
    <Router>
      <div>
        {!isAuthPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/materi" element={<Materi />} />
          <Route path="/vidio" element={<Vidio />} />
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
          <Route path="/kuis-simple-past" element={<KuisSimplePastTense/>}/>
          <Route path='/kuis-past-continuous' element={<KuisPastContinuousTense/>} />
          <Route path='/kuis-past-perfect' element={<KuisPastPerfect/>} />
          <Route path='/kuis-past-perfect-continuous' element={<KuisPastPerfectContinuous/>} />
          <Route path='/kuis-perfect-continuous' element={<KuisPerfectContinuous />} />
          <Route path='/kuis-simple-present' element={<KuisSimplePresent />} />
          <Route path='/kuis-present-continuous' element={<KuisPresentContinuous />} />
          <Route path='/kuis-present-perfect' element={<KuisPresentPerfect />} />
          <Route path='/kuis-present-perfect-continuous' element={<KuisPresentPerfectContinuous />} />
          <Route path='/tosimple-future' element={<TOSimplefuture />} />

        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
          <Route path="/dashboard" element={<Footer />} />
          <Route path="/materi" element={<Footer />} />
          <Route path="/video" element={<Footer />} />
          <Route path='/to' element={<Tryout />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
