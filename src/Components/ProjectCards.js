import {React,useState} from 'react'
import './ProjectCards.css'

function ProjectCards(props) {
  const projectList = props.data.map((projectItem)=>{
    return((projectItem.context===true)?(
      <div key={projectItem.title} className='detail-container back-side'  onMouseLeave={()=>{projectItem.contextChange(false)}}>
        <h2 key={projectItem.title} className='project-title'>{projectItem.title}</h2>
        <p key={projectItem.title} className='project-description'>{projectItem.description}</p>
      </div>
    ):(
      <div
        key={projectItem.title} 
        className= 'detail-container image-container' 
        style={{backgroundImage:`url(${projectItem.image})`}} 
        onMouseEnter={()=>{projectItem.contextChange(true)}}
      >
      </div>
  ))})
  return (
    <>
      <div className='project-container'>
        {projectList}
      </div>
    </>
  )
}

export default ProjectCards
