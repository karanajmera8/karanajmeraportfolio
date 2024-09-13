import {useState, useEffect, useContext} from 'react'
import { TfiMenu, TfiClose } from "react-icons/tfi";
import { Button } from "./Button";
import './Navbar.css';
import { HashLink } from "react-router-hash-link";
import { SignupContext } from '../Contexts/SignupContext';
import { IoLogoLinkedin } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import NavbarCards from './NavbarCards';


function Navbar(){

    const {click,setClick} = useContext(SignupContext)

    const handleClick = ()=>{
        setClick(!click)
    }

    

    const [button,setButton] = useState(true)

    const showButton = ()=>{
        if (window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    useEffect(()=>{
        showButton();
    },[])
    window.addEventListener('resize',showButton)

    const {signUp,setSignUp} = useContext(SignupContext)

    const clickSubmit = ()=>{
        console.log(signUp)
        setSignUp(!signUp)
        console.log(signUp)
    }

    const socialIcons = [
        {
          title: <FaGithub />,
          link: "https://github.com/karanajmera8",
          class:"navbar-logo"
        },

        {
          title: <IoLogoLinkedin />,
          link: "https://www.linkedin.com/in/karanajmera",
          class:"navbar-logo"
        },
    ]

    const navigation=[
        {
            title: "About Me",
            link: "/",
            class:"nav-link",
        },

        {
            title: "Skills",
            link: "#skills",
            class:"nav-link",
        },

        {
            title: "Projects",
            link: "#projects",
            class:"nav-link",
        },

        {
            title: "Experience",
            link: "#experience",
            class:"nav-link",
        },

        {
            title: "Certificates",
            link: "#certificates",
            class:"nav-link",
        }


    ]

    const closeMobileMenu = ()=>{
        setClick(false);
      }

    return(
        <section id='/'>
            <nav className="navbar">
                <div className="navbar-container">
                    <HashLink to='/' className="navbar-logo" onClick={closeMobileMenu}>K<span className='span'>A</span></HashLink >
                    <NavbarCards data={socialIcons}></NavbarCards>
                </div>

                <div className="menu-icon" onClick={handleClick}>
                    {click?<TfiClose/>:<TfiMenu />}
                </div>

                <ul className={click?"nav-menu active":"nav-menu"}>
                    <NavbarCards data={navigation}></NavbarCards>
                    <li className='nav-item-mobile'>
                        <Button className='nav-links-mobile' buttonStyle='btn--outline' onClick={clickSubmit}>Contact Me</Button>
                    </li>
                </ul>

                {button && <Button buttonStyle='btn--outline' onClick={clickSubmit}>Contact <span style={{color:'#ccb08a'}}>Me</span></Button>}
            </nav>
        </section>
    )
}

export default Navbar


/*
<li className="nav-item">
                        <HashLink to='#skills' className="nav-link" onClick={closeMobileMenu}>Skills</HashLink >
                    </li>

                    <li className="nav-item">
                        <HashLink to='#projects' className="nav-link" onClick={closeMobileMenu}>Projects</HashLink >
                    </li>

                    <li className="nav-item">
                        <HashLink to='#experience' className="nav-link" onClick={closeMobileMenu}>Experience</HashLink >
                    </li>

                    <li className="nav-item">
                        <HashLink to='#certificates' className="nav-link" onClick={closeMobileMenu}>Certificates</HashLink >
                    </li>

                    <li className='nav-item-mobile'>
                        <Button className='nav-links-mobile' buttonStyle='btn--outline' onClick={clickSubmit}>Contact Me</Button>
                    </li>

                */