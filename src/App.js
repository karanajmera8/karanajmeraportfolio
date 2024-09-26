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
import AboutMe from './Components/AboutMe';


function App(){
  const [signUp,setSignUp] = useState(false)
  const [click,setClick] = useState(false)
  const [projectTitle1,setProjectTitle1] = useState(false)
  const [projectTitle2,setProjectTitle2] = useState(false)
  const [projectTitle3,setProjectTitle3] = useState(false)
  const [projectTitle4,setProjectTitle4] = useState(false)
  return(
    <>
      <Router>
        <SignupContext.Provider value={{signUp,setSignUp,click,setClick,projectTitle1,setProjectTitle1,projectTitle2,setProjectTitle2,projectTitle3,setProjectTitle3,projectTitle4,setProjectTitle4}}>
          <SignUp />
          <Navbar />
          <Home/>
          <AboutMe/>
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