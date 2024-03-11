import React from 'react'
import './MidComponentParent.css'
import MidComponentItem from './MidComponentItem'
import MidPhone1 from '../../assets/images/MidComponentPhone.png';
import MidPhone2 from '../../assets/images/midPhone2.png'

const MidComponentParent = () => {
  return (
    <div>
        <MidComponentItem title="Dive into the Future" text="In a world where people constantly have a phone in their hands, the need for online applications are growing.. we have a solution- fully digital access to all information and services related to the interior and exterior designs. Everything in the palm of yout hand" img={MidPhone1} reverse></MidComponentItem>
        <MidComponentItem 
        title="Search by Type"
        img={MidPhone2}></MidComponentItem>
    </div>
  )
}

export default MidComponentParent