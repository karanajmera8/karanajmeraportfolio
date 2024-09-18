import React from 'react'
import './CertificateCards.css'

function CertificateCards(props) {
    const certificates = props.data.map((certificate)=>{
        return(
            <section key={certificate.title}>
                <div className='individual-container'>
                    <p className='front-icon'>{certificate.icon}</p>
                    <h1>{certificate.title}</h1>
                    <p>by</p>
                    <h2>{certificate.provider}</h2>
                    <p>{certificate.date}</p>
                </div>
            </section>
        )
    })
  return (
    <div className='certificates-container'>
      {certificates}
    </div>
  )
}

export default CertificateCards
