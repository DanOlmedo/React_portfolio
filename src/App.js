import './App.css';
import Hello from './components/Hello';
import Header from './components/Header';
import About from './components/About';
import Info from './components/Info';
import Projects from './components/Projects';


function App() {
  return (
    
    <div className="App">
      <Header />
      <About />
      <Hello />
      <Projects />
      <Info />
    </div>
    
  );
}



export default App;
