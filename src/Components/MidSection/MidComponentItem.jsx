import React from 'react'
import "./MidComponentItem.css"
import { room } from '../../DataForPage/dummyData'
import {motion} from 'framer-motion';


const MidComponentItem = ({title, img, text, reverse}) => {
  return (
    <div id='company'>
        {reverse ? 
        (<div className='midcomponentitem-container'>
        <motion.div initial="hidden" whileInView='visible' viewport={{once: true}}
                transition={{duration:1.5}}
                variants={{visible:{opacity:1, scale:1},hidden:{opacity:0, scale:0}}} className='component-content'>
            <h2>{title}</h2>
            <p>{text}</p>
            <button className='pushable mt-4'><span className='front'>Start Now</span></button>
        </motion.div>
        <motion.div initial="hidden" whileInView='visible' viewport={{once: true}}
                transition={{duration:1.5}}
                variants={{visible:{opacity:1, scale:1},hidden:{opacity:0, scale:0}}} className='mid-component-image'>
            <img src={img} alt="" />
        </motion.div>

    </div>): (<motion.div initial="hidden" whileInView='visible' viewport={{once: true}}
                transition={{duration:1.5}}
                variants={{visible:{opacity:1, scale:1},hidden:{opacity:0, scale:0}}} id='room' className='midcontent-reverse'>
        <div className='midcomponentitem-container-reverse'>
            <h2>{title}</h2>
        
        <div className='items-container'>
        {room.map((item)=>{
            return <div className='component-items' key={item.id}>
                <div className='mr-4'>
                    <img className="w-12 h-12"src={item.img} alt="" />
                </div>
                <p>{item.name}</p>
            </div>
        })}
        </div>
        </div>
        <div className='reverse-content-image'>
        <img className='h-[575px]' src={img} alt="" />
        </div>
    </motion.div>
    )}
   
    </div>
  )
}

export default MidComponentItem