import React from 'react'
import './Home.css'
import profilepic from '../Images/profilepic.jpg'
import { Button } from './Button'

function Home(){
    const resumeOnClick = ()=>{
        const pdfURL = "../Assets/Resume_Karan_Ajmera.pdf";
        const link = document.createElement("a");
        link.href=pdfURL;
        link.download = "Resume_Karan_Ajmera.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }
    return(
        <>
            <div className='home-container'>
                <div className='summary'>
                    <h2 style={{color:'white'}}>Karan <span style={{color:'#ccb08a'}}>Ajmera</span></h2>
                    <p style={{color:'white'}}>I'm a full-stack developer with great experience and passion for coding! Professional with a Master's in Information Technology and experience of over 8 years in Technology</p>
                    <div className='resume-button'>
                        <Button buttonStyle='btn--outline' onClick={resumeOnClick}>
                            Download Resume
                        </Button>
                    </div>
                </div>
                <div className='profile-img-container'>
                    <img src={profilepic} alt="image of me" className='profile-image'></img>
                </div>
            </div>
            <hr color='black'></hr>
        </>
    )
}

export default Home