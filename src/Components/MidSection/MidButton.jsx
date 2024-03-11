import React from 'react'
import './MidButton.css'

const MidButton = ({buttons, filter, selected}) => {
  return (
    <div className='button-container'>
      {buttons.map((button)=>{
        return <button className={selected === button.id ? "pushable mr-4":"pushable mr-4"} key={button.id} onClick={() => filter(button.id)}>
            <span className={selected === button.id ? "front2":"front"}>{button.name}</span>
        </button>
      })}  
    </div>
  )
}

export default MidButton