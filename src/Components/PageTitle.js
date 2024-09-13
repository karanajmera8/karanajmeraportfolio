import React from 'react'
import './PageTitle.css'

function PageTitle(props) {
  return (
    <div className='title-container'>
        <h2 className='title-headers'>{props.children}</h2>
    </div>
  )
}

export default PageTitle
