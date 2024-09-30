import React from 'react';
import BackTop from './BackTop';
import { languages, frameworks} from '../Constants/Constants';
import './Bounce.css'

export default function Skills() {
  return (
    <section id='skills'>
      <h2 className='about-title' style={{fontSize:'100px'}}>Skills</h2>
      <p style={{textAlign:'center',color:'white',marginTop:'10px',fontSize:'40px'}}>Technical Languages</p>
      <div className='flex flex-row flex-wrap justify-center gap-6 md:gap-16 my-10 w-full'>
          {languages.map((language, index) => (
              <div key={index} className={`sphere mud-gradient flex items-center justify-center rounded-full p-4`}>
                  <img title={language.title} src={language.icon} alt={language.title} className='skill-images' />
              </div>
          ))}
      </div>
      <p style={{textAlign:'center',color:'white',marginTop:'80px',fontSize:'40px'}}>Technologies and Frameworks</p>
      <div className='flex flex-row flex-wrap justify-center gap-6 md:gap-16 my-10 w-full'>
          {frameworks.map((framework, index) => (
              <div key={index} className={`sphere mud-gradient flex items-center justify-center rounded-full p-4`}>
                  <img title={framework.title} src={framework.icon} alt={framework.title} className='skill-images' />
              </div>
          ))}
      </div>

      <BackTop />
      <hr color='black'></hr>
    </section>
  )
}
