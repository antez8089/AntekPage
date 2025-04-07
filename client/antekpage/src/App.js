import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate} from 'react-router-dom';
import NavBar from './components/NavBar.jsx'
import About from './pages/About.jsx'



function App() {
  return (
   <HashRouter>
    <NavBar/>
      <Routes>
        <Route path="/about" element ={<About />} />
      </Routes>
   </HashRouter>
  );
}

export default App;