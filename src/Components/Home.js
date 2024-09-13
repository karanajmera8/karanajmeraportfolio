import React from 'react'
import './Home.css'
import profilepic from '../Images/profilepic.jpg'

function Home(){
    return(
        <div className='home-container'>
            <div className='summary'>
                <h2 style={{color:'white'}}>Karan <span style={{color:'#ccb08a'}}>Ajmera</span></h2>
                <p style={{color:'white'}}>I'm a full-stack developer with great experience and passion for coding! Professional with a Master's in Information Technology and experience of over 8 years in Technology</p>
            </div>
            <div className='profile-img-container'>
                <img src={profilepic} alt="image of me" className='profile-image'></img>
            </div>
            <hr color='black'></hr>
        </div>
    )
}

export default Home