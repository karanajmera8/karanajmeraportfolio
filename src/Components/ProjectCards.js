import {React,useState} from 'react'
import './ProjectCards.css'

function ProjectCards(props) {
  const projectList = props.data.map((projectItem)=>{
    return((projectItem.context===true)?(
      <div className='detail-container' onMouseLeave={()=>{projectItem.contextChange(false)}}>
        <h2 className='project-title'>{projectItem.title}</h2>
        <p className='project-description'>{projectItem.description}</p>
      </div>
    ):(
      <div 
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
