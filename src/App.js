import React from 'react';
import './App.css';
import Header from '../src/Component/Head/Header';
import Navber from '../src/Component/Head/Navbar';
import Intro from '../src/Component/slider/Intro';
import Nyheder from '../src/Component/Nyhederne/Nyheder';
import Aktiviteter from '../src/Component/Akrtivet/Aktiviteter';
import DKC from '../src/Component/outroing/DKC';
import Instagram from '../src/Component/outroing/Instagram';
import Nyhedsbrev from '../src/Component/outroing/Nyhedsbrev';





function App() {
  return (
    <div className="App">
      <Header />
      <Navber />
      <Intro />
      <Nyheder />
      <Aktiviteter />
      <DKC />
      <Instagram />
      <Nyhedsbrev />
    </div>
  );
}

export default App;
