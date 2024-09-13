import React from 'react'
import './ProjectCards.css'

function ProjectCards(props) {
  const projectList = props.data.map((projectItem)=>{
    return(
      <div className='project-container'>
        <div className= 'detail-container image-container' style={{backgroundImage:`url(${projectItem.image})`}}>
        </div>
        <div className='detail-container'>
          <h2 className='project-title'>{projectItem.title}</h2>
          <p className='project-description'>{projectItem.description}</p>
        </div>
      </div>
  )})
  return (
    <>
      {projectList}
    </>
  )
}

export default ProjectCards
