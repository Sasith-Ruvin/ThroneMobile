import React, { useState } from 'react'
import {motion} from 'framer-motion';
import './Model.css'
import { Tooltip } from "@material-tailwind/react";

const Model = ({open, setOpen}) => {
    const [message, setMessage] = useState('')
    const handleSubmit =(e) =>{
        e.preventDefault();
        setMessage("");
        setOpen(false);
        console.log(message);

    }
  return (
    <div>
        <motion.div className='bg-white relative z-20 flex felx-col rounded-2xl' initial={{scale:1, opacity:0, height:0, width:0}}
        animate={{x: open ? -10:0, y:open?-30:0,
        width: open && "300px",
        height: open && "375px",
        opacity:1}}
        transition={{type:"spring", duration:2, ease:"easeInOut"}}>
        <motion.div className='pt-4 flex-col pl-5' initial={{opacity:0}}
        animate={{opacity:1}}
        transition={{type:"tween", duration:2}}
        >
            <h5 className='chat-heading'>Hello🖐🏻</h5>
            <p className='chat-greeting'>Welcome to ThroneCraft</p>
            <span className='chat-span'>Ask us Anything</span>
            <div className='chat-input'>
                <form onSubmit={handleSubmit}>
                    <input type="text" name='message' placeholder='Send us a Messgse' className='outline-none border-none' value={message} onChange={(e)=> setMessage(e.target.value)} />
                </form>
            </div>
           <Tooltip content="Close" placement="top">
           <div className='svg-container'onClick={()=> setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                </svg>
            </div>
           </Tooltip>
        </motion.div>
        </motion.div>
    </div>
  )
}

export default Model