import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  const removeClasses = () => {
    document.body.classList.remove(`bg-primary`);
    document.body.classList.remove(`bg-secondary`);
    document.body.classList.remove(`bg-success`);
    document.body.classList.remove(`bg-danger`);
    document.body.classList.remove(`bg-warning`);
    document.body.classList.remove(`bg-info`);
    document.body.classList.remove(`bg-dark`);
  }

  const toggleMode = (color) => {
    removeClasses();
    setMode(color);
    document.body.classList.add(`bg-${color}`);
    // showAlert(`${color} mode enabled`, 'success');
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = 'rgb(1 20 100)';
      // showAlert('Dark mode enabled', 'success');
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      // showAlert('Dark mode disabled', 'success');
    }
  }
  return (
    <>
    <Router basename={document.URL.includes('https://github.com/Saurabh-Shukla534/Text_Utility_App-React') ? '/Text_Utility_App-React' : '/'}>
      <Navbar title="Text Utils" aboutText="About us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <Routes>
        <Route path="/about" element={
          <div className="container my-4">
            <About />
          </div>
        }>
        </Route>
        <Route path="/" element={
          <div className="container my-4">
            <TextForm heading="Enter text to perform operations" mode={mode} showAlert={showAlert}/> 
          </div>
        }>
        </Route>
      </Routes>
    </Router>
    </>
  );
}

export default App;
