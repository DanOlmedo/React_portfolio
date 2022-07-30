import './App.css';
import React, { useState } from 'react';
import Hello from './components/Hello';
import Header from './components/Header';
import About from './components/About';
import Info from './components/Info';
import Projects from './components/Projects';
import Roof from './components/Roof';
import Intro from './components/Intro';
import Contact from './components/Contact';


function App() {

  const [page, setPage] = useState("Full");

  function pageChanger(currentPage) {
    if (currentPage === "About") {
      return <About />
    }
    else if (currentPage === "Projects") {
      return <Projects />
    }
    else if (currentPage === "Contact") {
      return <Contact />
    }
    else if (currentPage === "Full") {
      return (
        <div className="App">
        <Intro />
        <Roof />
        <About />
        <Hello />
        <Projects />
        </div>
      )
    }
  }

  return (
    
    <div className="App">
      <Header setPage={ setPage }/>
      {pageChanger(page)}
      <Info />
    </div>
    
  );
}

export default App;