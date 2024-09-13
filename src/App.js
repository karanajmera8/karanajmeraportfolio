import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './Components/Navbar';
import './App.css';
import Home from './Components/Home';
import Skills from './Components/Skills';
import SignUp from './Components/SignUp';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import { useState } from 'react';
import { SignupContext } from './Contexts/SignupContext';
import Certificates from './Components/Certificates';

function App(){
  const [signUp,setSignUp] = useState(false)
  const [click,setClick] = useState(false)

  return(
    <>
      <Router>
        <SignupContext.Provider value={{signUp,setSignUp,click,setClick}}>
          <SignUp />
          <Navbar />
          <Home/>
          <Skills/>
          <Projects />
          <Experience />
          <Certificates/>          
        </SignupContext.Provider>
      </Router>
    </>
  )
}

export default App