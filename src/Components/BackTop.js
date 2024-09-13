import React from 'react'
import './BackTop.css'
import { HashLink as Link} from 'react-router-hash-link'

function BackTop() {
  return (
    <section id='top'>
      <div className='circle-container'>
        <Link to='#/' className='top-link'>
            <p>Home</p>
        </Link>
      </div>
    </section>
  )
}

export default BackTop
