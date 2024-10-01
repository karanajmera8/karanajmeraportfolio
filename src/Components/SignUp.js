import React, { useState, useContext, useRef } from 'react'
import { SignupContext } from '../Contexts/SignupContext';
import { Button } from './Button';
import emailjs from '@emailjs/browser';

function SignUp() {
    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [note,setNote] = useState('');
    const {signUp,setSignUp} = useContext(SignupContext)
    const form = useRef();

    const cancelClick = ()=>{
      setSignUp(!signUp);
      setFullName('');
      setEmail('');
      setNote('');
    }

    const sendEmail = (e)=>{
      e.preventDefault();

      emailjs.sendForm('service_jymlpk5', 'template_p7f9r4v', form.current, '-egdd3uP4dza2YoER')
        .then((result)=>{
          console.log(result.text);
        },(error)=>{
          console.log(error.text);
        });
      
      setSignUp(!signUp);
      setFullName('');
      setEmail('');
      setNote('');

      alert("Thank you for your email! I will get back to you ASAP!")
    }
    
  return (signUp)?(
    <>
      <div className='pop-up'>
        <div className='signup-form-container'>
            <form ref = {form} className='signup-form'>
                <label className='label' htmlFor='fullName'>Full Name: </label>
                <input className='input' value ={fullName} onChange={(e)=>{setFullName(e.target.value)}} name='fullName' id='fullName'></input>
                <br></br>
                <label className='label' htmlFor='email'>Email: </label>
                <input className='input' value ={email} onChange={(e)=>{setEmail(e.target.value)}} name='email' id='email'></input>
                <br></br>
                <label className='label' htmlFor='note'>Message: </label>
                <textarea className='text-area' value ={note} onChange={(e)=>{setNote(e.target.value)}} name='note' id='note'></textarea>
            </form>
            <div className='button-holder'>
              <Button className='signup-button' buttonStyle='btn--outline' onClick={cancelClick}>Cancel</Button>
              <Button className='signup-button' buttonStyle='btn--primary' onClick={sendEmail}>Submit</Button>
            </div>
        </div>
      </div>
    </>
  ):""
}

export default SignUp
