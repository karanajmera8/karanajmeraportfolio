import React from 'react';
import './Skills.css';
import { FaServer } from "react-icons/fa";
import { GoTerminal } from "react-icons/go";
import BackTop from './BackTop';
import PageTitle from './PageTitle';

export default function Skills() {
  return (
    <section id='skills'>
      <PageTitle>Skills</PageTitle>
      <div className='card-container'>
        <div className='front-end-card'>
          <GoTerminal className='front-icon'/>
          <h2>Front-end Developer</h2>
          <p className = 'skill-summary' >Skilled Front-end Developer with 4 years of experience in designing, developing and maintaining front-end web applications. Achieved measurable success in increasing page load speeds by 20% which lead to an increase in website conversion rates.</p>
          <h3>Technology Stack</h3>
          <p className = 'languages'>HTML, CSS, JavaScript</p>
          <h3>My Tools</h3>
          <ul>
            <li className='list-items'>BootStrap</li>
            <li className='list-items'>React</li>
            <li className='list-items'>GitHub</li>
            <li className='list-items'>VSCode</li>
          </ul>
        </div>

        <div className='back-end-card'>
          <FaServer className='server-icon'/>
          <h2>Back-end Developer</h2>
          <p className = 'skill-summary' >Develop business logic and back-end system to support the product, create API, have vast experience with version control systems.</p>
          <h3>Languages</h3>
          <p className = 'languages'>Python, SQL, C++, JavaScript</p>
          <h3>My Tools</h3>
          <ul>
            <li className='list-items'>MySQL</li>
            <li className='list-items'>Django</li>
            <li className='list-items'>Docker</li>
          </ul>
        </div>
      </div>

      <BackTop />
      <hr color='black'></hr>
    </section>
  )
}
