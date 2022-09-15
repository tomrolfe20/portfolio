import React from "react";
import Navbar from "./components/navbar/Navbar";
import GlobalStyle from "./globalStyles";
import Projects from "./components/projects/Projects";
import {Routes, Route} from 'react-router-dom'
import Hero from "./components/hero/Hero";
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/about/About";

function App() {
  return (
    <>
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Hero />}></Route>
        <Route path='/projects' element={<Projects />}></Route>
        <Route path='/about' element={<About />}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
