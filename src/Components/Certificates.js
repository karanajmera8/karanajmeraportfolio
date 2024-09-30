import React from 'react'
import { FaReact,FaPython } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import CertificateCards from './CertificateCards';
import BackTop from './BackTop';

function Certificates() {
  const certificate = [
    {
      title:'Front-End developer',
      provider:'Coursera',
      icon:<FaReact />,
      date:'Sep 2024'
    },

    {
      title:'Programming for Everybody',
      provider:'Coursera',
      icon:<FaPython />,
      date:'Dec 2019'
    },

    {
      title:'Python Data Structures',
      provider:'Coursera',
      icon:<FaPython />,
      date:'Dec 2019'
    },
    
    {
      title:'Project Management Professional',
      provider:'Project Management Institute',
      icon:<MdManageAccounts />,
      date:'Dec 2019'
    },
  ]

  return (
    <section id='certificates'>
      <h2 className='about-title' style={{fontSize:'100px'}}>Skills</h2>
      <CertificateCards data={certificate}></CertificateCards>
      <BackTop />
      <hr color='black'></hr>
    </section>
  )
}

export default Certificates
