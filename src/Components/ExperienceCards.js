import React from 'react'

function ExperienceCards(props) {
  const experiences = props.data.map((experience)=>{
    return(
        <section key={experience.title}>
            <div className='experience-container'>
                <div className='date-container'>
                    {experience.year}
                </div>
                <div className='content-container'>
                    <h2 className='experience-title'>{experience.title}</h2>
                    <p className='experience-description'>{experience.description}</p>
                </div>
            </div>
        </section>
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
