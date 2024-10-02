import React, {useState, useContext, useRef} from 'react';
import { SignupContext } from '../Contexts/SignupContext';
import { Button } from './Button';
import emailjs from '@emailjs/browser';

function SignUp(){
    const [formData,setFormData] = useState({
        name:'',
        email:'',
        note:'',
    });

    const {signUp,setSignUp} = useContext(SignupContext)

    const form = useRef();

    const cancelClick = ()=>{
        setSignUp(!signUp);
        setFormData({
            name:'',
            email:'',
            note:'',
        })
        setErrors({});
    }

    const [errors,setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({...formData,[e.target.name]:e.target.value});
    };

    const validateForm = () => {
        let newErrors = {};

        if (!formData.name){
            newErrors.name = 'Name is required';
        }

        if(!formData.email){
            newErrors.email = 'Email is required';
        }   else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)){
            newErrors.email = 'Invalid email format';
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length ===0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(validateForm()){
            emailjs.sendForm('service_jymlpk5', 'template_p7f9r4v', form.current, '-egdd3uP4dza2YoER')
            .then((result)=>{
              console.log(result.text);
            },(error)=>{
              console.log(error.text);
            });
            setSignUp(!signUp);
            setFormData({
                name:'',
                email:'',
                note:'',
            });
            setErrors({});
            alert('Thank you for your message! I will get back to you ASAP!')
        }
    };

    return(signUp)?(
        <>
            <div className='pop-up'>
                <div className='signup-form-container'>
                    <form className='signup-form' ref = {form} onSubmit={handleSubmit}>
                        <label className='label' htmlFor='name'>Full Name: </label>
                        <input type = 'text' id='name' name='name' className='input' value ={formData.name} onChange={handleChange} ></input>
                        {errors.name && <span className="error">{errors.name}</span>}
                        
                        <label className='label' htmlFor='email'>Email: </label>
                        <input type = 'text' id='email' name='email' className='input' value ={formData.email} onChange={handleChange} ></input>
                        {errors.email && <span className="error">{errors.email}</span>}

                        <label className='label' htmlFor='note'>Message: </label>
                        <input type = 'text-area' id='note' name='note' className='text-area' value ={formData.note} onChange={handleChange} ></input>
                        {errors.note && <span className="error">{errors.note}</span>}
                        <br></br>

                        <div className='button-holder'>
                            <Button className='signup-button' buttonStyle='btn--outline' onClick={cancelClick}>Cancel</Button>
                            <Button className='signup-button' buttonStyle='btn--primary'>Submit</Button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    ):""
}

export default SignUp;