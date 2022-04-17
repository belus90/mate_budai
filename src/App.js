import React from 'react';
import './App.css';
import MainBox from './container/MainBox';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';
import Header from './components/Header';
import Home from './components/Home';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<>
    <Header />
    <Home />
      <About />
      <Portfolio />
      <Contact />

</>
  );
}

export default App;

