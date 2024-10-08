import React from 'react'
import ExperienceCards from './ExperienceCards'
import BackTop from './BackTop'

function Experience() {
  const experience = [
    {
      title:"Senior Systems Design Engineer at T-Mobile",
      year:"2021-Present",
      description:"Lead design engineer managing solution deployment for T-Mobile core network. Developed python software to optimize and maintain the tools for KPI monitoring and reporting."
    },

    {
      title:"Software Engineer Volunteer at Fly-Paper Tutors",
      year:"2020-2020",
      description:"Contributed to full-stack development of a new platform for providing free tutoring to high-school students"
    },

    {
      title:"Software Engineer Intern at Rajkamal Barscans",
      year:"2013-2014",
      description:"Contributed to development of robust, scalable web application using Django"
    },

    {
      title:"University of North America",
      year:"2019-2021",
      description:"Master of Science in Information Technology"
    },
    
    {
      title:"University of Maryland",
      year:"2014-2016",
      description:"Master of Science in Telecommunications Engineering"
    },
    {
      title:"Veermata Jijabai Technology Institute",
      year:"2010-2014",
      description:"Bachelor of Science in Electronic Engineering"
    }    
    
  ]
  return (
    <section id='experience'>
      <h2 className='header' style={{textAlign:'center', font:'Times New Roman',color:'#ccb08a'}}>Experience</h2>
      <ExperienceCards data={experience}/>
      <BackTop />
      <hr color='black'></hr>
    </section>
  )
}

export default Experience
