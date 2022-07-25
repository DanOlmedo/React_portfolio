import './App.css';
import React, { useState } from 'react';
import Hello from './components/Hello';
import Header from './components/Header';
import About from './components/About';
import Info from './components/Info';
import Projects from './components/Projects';
import Roof from './components/Roof';
import Intro from './components/Intro';


function App() {

  const [page, setPage] = useState("Projects");

  function pageChanger(currentPage) {
    if (currentPage === "About") {
      return <About />
    }
    else if (currentPage === "Projects") {
      return <Projects />
    }
  }

  return (
    
    <div className="App">
      <Header setPage={ setPage }/>
      {/* <Intro />
      <Roof /> */}
      {pageChanger(page)}
      <Info />
    </div>
    
  );
}

export default App;