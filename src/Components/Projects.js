import React from 'react'
import './Projects.css'
import websitePicture from '../Images/WebsiteTemplate.jpg'
import ProjectCards from './ProjectCards'
import dbmsPicture from '../Images/dbms.png'
import wcsSystem from '../Images/WirelessCommunicationSystem.jpg'
import BackTop from './BackTop'

function Projects() {
  const projects = [
    {
      title:'E-Commerce Website',
      description:'Designed and implemented a functional e-commerce website using Django framework',
      image:websitePicture
    },
    {
      title:'DBMS Systems',
      description:'Created MySQL database to manage clients, products and orders for an online retail business',
      image:dbmsPicture
    },
    {
      title:'Wireless Communication System',
      description:'Simulated a wireless system environment with users, monitoring network KPIs and performance',
      image:wcsSystem
    }
  ]

  return (
    <section id='projects'>
      <h2 className='project-title' style={{fontSize:'60px'}}>Projects</h2>
      <p style={{textAlign:'center',color:'white'}}>Have a look at some of the projects I'm proud of:</p>
      
      <ProjectCards data={projects}/>
      <BackTop />
      <hr color='black'></hr>
    </section>
  )
}

export default Projects
