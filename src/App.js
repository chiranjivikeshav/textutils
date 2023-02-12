import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';
// import About from './components/About';
import React, { useState } from 'react';


// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,


// } from "react-router-dom";

function App() {
  const [Mode, setmode] = useState('light');
  const enableDarkMode = () => {
    if (Mode === "light") {
      setmode("dark");
      document.body.style.backgroundColor = "#042741";
      showAlert("Dark mode has been enabled", "Success")
    }
    else {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "Success")
    }
  }



  const [alert1, setAlert] = useState(null)
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      typ: type,
    })
    setTimeout(() => {
      setAlert(null);
    }, 2500)

  }



  return (
 <>
    
    <Navbar title="TEXTUTILS" mode={Mode} enableDarkMode={enableDarkMode} />
      <Alert alert={alert1} />
      <div className="container my-3">
        

          {/* <Route exact path='/Textform' element={<Textform heading="ENTER TEXT HERE" mode={Mode} />}/> */}
          <Textform heading="ENTER TEXT HERE" mode={Mode} />
          
          {/* <Route exact path='/About' element={<About />}/> */}
           
        

      </div>
    
    </>
      





  );
}

export default App;
