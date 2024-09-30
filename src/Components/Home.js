import React from 'react'
import profilepic from '../Assets/comp.png'
import { Typewriter } from 'react-simple-typewriter';

function Home(){
    return(
        <>
            <div className='home-container'>
                <div className='home-info'>
                    <h2 style={{color:'white'}}>Hi, I am</h2>
                    <h2 style={{color:'#ccb08a'}}>Karan</h2>
                    <p style={{color:'white',fontSize:'30px'}}>I am a
                        <span style={{color:'#ccb08a',fontSize:'50px'}}>
                        <Typewriter words={[' Full Stack Developer!', ' Software Engineer!', ' PMP Professional!', ' Telecommunications Specialist!']} loop={0} cursor cursorStyle='_' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
                        </span>
                    </p>
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