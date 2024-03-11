import React from 'react'
import './MidChild.css'
import {motion} from 'framer-motion'

const MidChild = ({data, click}) => {
  return (
    <div>
        <div>
           {data.map((item)=>{
            return <motion.div key={item.id}
            initial={{scale:0.8, opacity:0}}
            animate={{y: click ? 50:0,
                      x: click ? 50:0,
                      opacity:1}}
            exit={{scale:0.8, opacity:0}}
            transition={{type:"spring", duration:1.5}}
            className='mid-id'>
                <div className='mid-title'>
                    <h3>{item.title}</h3>
                </div>
                <div className='mid-content-container'>
                    <div className='mid-text'>
                        <p>{item.text}</p>
                    </div>
                    <div className='mid-image'>
                        <motion.img
                        initial={{height:0, opacity:0}}
                        animate={{height: click ? "525px":"525px", opacity:1}}
                        transition={{type:"tween", duration:3}}
                        className="image"src={item.img} alt={item.title} />
                    </div>
                    
                </div>
            </motion.div>
            
           })} 
        </div>
    </div>
  )
};

export default MidChild