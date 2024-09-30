import React, { useContext } from 'react'
import websitePicture from '../Images/WebsiteTemplate.jpg'
import ProjectCards from './ProjectCards'
import dbmsPicture from '../Images/dbms.png'
import wcsSystem from '../Images/WirelessCommunicationSystem.jpg'
import BackTop from './BackTop'
import { SignupContext } from '../Contexts/SignupContext'
import virtualAssistant from '../Images/VirtualAssistant.jpg'

function Projects() {
  const {projectTitle1,setProjectTitle1} = useContext(SignupContext);
  const {projectTitle2,setProjectTitle2} = useContext(SignupContext);
  const {projectTitle3,setProjectTitle3} = useContext(SignupContext);
  const {projectTitle4,setProjectTitle4} = useContext(SignupContext);

  const projects = [
    {
      title:'E-Commerce Website',
      description:'Developed and deployed a full-stack website with Django for backend, ensuring scalability and robust performance.',
      image:websitePicture,
      context:projectTitle1,
      contextChange:setProjectTitle1
    },
    {
      title:'Virtual Desktop Assistant',
      description:'Simulated a wireless system environment with users, monitoring network KPIs and performance',
      image:virtualAssistant,
      context:projectTitle2,
      contextChange:setProjectTitle2
    },
    {
      title:'DBMS Systems',
      description:'Created MySQL database to manage clients, products and orders for an online retail business',
      image:dbmsPicture,
      context:projectTitle3,
      contextChange:setProjectTitle3
    },
    {
      title:'Wireless Communication System',
      description:'Simulated a wireless system environment with users, monitoring network KPIs and performance',
      image:wcsSystem,
      context:projectTitle4,
      contextChange:setProjectTitle4
    },
    
  ]

  return (
    <section id='projects'>
      <h2 className='project-title' style={{fontSize:'100px'}}>Projects</h2>
      <p style={{textAlign:'center',color:'white',marginTop:'10px',fontSize:'40px'}}>Have a look at some of the projects I'm proud of:</p>
      
      <ProjectCards data={projects}/>
      <BackTop />
      <hr color='black'></hr>
    </section>
  )
}

export default Projects