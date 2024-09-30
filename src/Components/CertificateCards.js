import React from 'react'

function CertificateCards(props) {
    const certificates = props.data.map((certificate)=>{
        return(
              <section className='individual-container' key={certificate.title}>
                  <p className='front-icon'>{certificate.icon}</p>
                  <h1>{certificate.title}</h1>
                  <p>by</p>
                  <h2>{certificate.provider}</h2>
                  <p>{certificate.date}</p>
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
