import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import About from './components/About';
import Info from './components/Info';
import Projects from './components/Projects';
import Roof from './components/Roof';
import Intro from './components/Intro';


function App() {
  return (
    
    <div className="App">
      <Header />
      <Intro />
      <Roof />
      <About />
      <Hello />
      <Projects />
      <Info />
    </div>
    
  );
}



export default App;
