import React, { useState } from 'react'
import './NewsLetter.css';
import { Input } from "@material-tailwind/react"
import { Button } from "@material-tailwind/react";


const NewsLetter = () => {
    //printing the user entered e-mail into console 
    //point of this is to simulate sending the email address into a database or to an email
    const [email, setEmail] = useState("");
    const handleEmail = (e) =>{
        e.preventDefault();
        setEmail("")
        console.log("email",email);
    }
  return (
    <div className='news-container'>
        <div className='newsletter-content'>
            <div className='news-text'>
                <h2>Sign Up to our Newsletter</h2>
                <p>Join our Newsletter and get info of offers and much more in your inbox</p>
            </div>
            <div className='newsletter-center'>
                <div className='newsletter-center-content'>
                <Input name='email' type='email' placeholder='E-mail' label="Email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>
                <div>
                <Button onClick={handleEmail} ripple={true} className='ml-4'>Signup</Button>;
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter