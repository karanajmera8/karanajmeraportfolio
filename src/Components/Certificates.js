import React from 'react'
import PageTitle from './PageTitle'
import { FaReact,FaPython } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import CertificateCards from './CertificateCards';
import './Certificates.css'
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
      <PageTitle>Certificates</PageTitle>
      <CertificateCards data={certificate}></CertificateCards>
      <BackTop />
      <hr color='black'></hr>
    </section>
  )
}

export default Certificates
