import React from 'react'
import './ExperienceCards.css'

function ExperienceCards(props) {
  const experiences = props.data.map((experience)=>{
    return(
        <>
            <div className='experience-container'>
                <div className='date-container'>
                    {experience.year}
                </div>
                <div className='content-container'>
                    <h2 className='experience-title'>{experience.title}</h2>
                    <p className='experience-description'>{experience.description}</p>
                </div>
            </div>
        </>
    )
  })
    return (
        <>
            <div className='grid-container'>
                {experiences}
            </div>
        </>
  )
}

export default ExperienceCards
