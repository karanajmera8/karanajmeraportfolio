import {React, useContext} from 'react'
import { HashLink } from 'react-router-hash-link'
import { SignupContext } from '../Contexts/SignupContext';

function NavbarCards(props) {
  const {setClick} = useContext(SignupContext)

  const closeMobileMenu = ()=>{
    setClick(false);
  }

  const social = props.data.map((icons)=>{
      return(icons.class==="navbar-logo")?(
          <a key={icons.id} href={icons.link} className={icons.class}>{icons.title}</a>
      ):(
      <li key={icons.title} className="nav-item">
        <HashLink key={icons.title} to={icons.link} className={icons.class} onClick={closeMobileMenu}>{icons.title}</HashLink >
      </li>
    )
  })    

  return (
    <>
      {social}
    </>
  )
}

export default NavbarCards
