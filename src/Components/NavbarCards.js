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
          <a href={icons.link} className={icons.class}>{icons.title}</a>
      ):(
      <li className="nav-item">
        <HashLink to={icons.link} className={icons.class} onClick={closeMobileMenu}>{icons.title}</HashLink >
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
