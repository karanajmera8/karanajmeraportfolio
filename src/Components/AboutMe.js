import React from 'react';
import { Button } from './Button';
import BackTop from './BackTop';
import pdf from '../Assets/Resume_Karan_Ajmera.pdf'
export default function AboutMe() {

  const resumeOnClick = ()=>{
    const link = document.createElement("a");
    link.href=pdf;
    link.download = "Resume_Karan_Ajmera.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
  return (
    <section id='about-me'>
      <div className='about-container'>
        <h2 className='about-title' style={{fontSize:'100px'}}>About Me</h2>
        <p className='about-summary'>With a background in Telecommunications and Information Technology, I transitioned into Software Engineering to blend my passion for problem-solving with technology. Equipped with hands-on experience in React, Django, Python, JS, I bring a unique perspective from Telecommunications, which enhances my approach to building innovative solutions. I thrive in collaborative environments, constantly learning and adapting to new challenges in software development. Whether it's creating efficient code, optimizing systems, or building user-centric applications, I’m dedicated to delivering high-quality results that drive impact. I'm a full-stack developer with great experience and passion for coding! Professional with a Master's in Information Technology and experience of over 8 years in Technology</p>
        <div className='resume-button'>
          <Button buttonStyle='btn--outline' onClick={resumeOnClick}>
              Download Resume
          </Button>
        </div>
        <BackTop />
        <hr color='black'></hr>
      </div>
      
    </section>
  )
}
