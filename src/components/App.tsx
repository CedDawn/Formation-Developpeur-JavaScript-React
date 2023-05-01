import React from 'react';
import { Routes, Route } from "react-router-dom";
import {About} from "../pages/about"
import {Home} from "../pages/home"
import {Header} from "./Header"
import {Footer} from "./Footer"
import { Id } from '../pages/id';

function App() {
  return (
    <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="/:id" element={<Id/>} />
        </Routes>
        <Footer/>
    </div>
  );
}

export default App;