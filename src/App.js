import React, { useState } from 'react'
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {

  const [mode, setMode] = useState('light'); //Tells wheather dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'TextUtils - Dark Mode';

      //Interval to display flash kind of a message in browser tab - not a good UX. (Just for understanding purpose)
      // setInterval(() => {
      //   document.title = 'TextUtils is amazing';
      // }, 2000);

      // setInterval(() => {
      //   document.title = 'Install text utils now';
      // }, 1500);

    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light mode has been enabled', 'success');
      document.title = 'TextUtils - Light Mode';
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <div>
      <Navbar title='TextUtils' aboutText='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className='container my-3'>
        <TextForm heading='Enter the text to analyze below' mode={mode} showAlert={showAlert} />
        <About />
      </div>
    </div>
  );
}

export default App;
