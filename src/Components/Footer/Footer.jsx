import React from 'react'
import { FooterData1 } from '../../DataForPage/dummyData'
import { FooterData2 } from '../../DataForPage/dummyData'
import { FooterData3 } from '../../DataForPage/dummyData'
import logo from '../../assets/images/Throne.webp'
import googlePlay from '../../assets/images/google-play.svg'
import appleStore from '../../assets/images/apple-store.svg'
import './Footer.css'


const Footer = () => {
  return (
    <div>
        <div className='footer-container'>
            <div className='footer-content-container '>
                <div>
                    <img className='logo-image' src={logo} alt="" />
                </div>
            </div>
            <div className='features-container'>
                <h3>Features</h3>
                {FooterData1.map((item)=>{
                    return <div className='features-content'>
                        <p>{item.text}</p>
                    </div>
                })}
            </div>
            <div className='features-container'>
                <h3>Privacy</h3>
                {FooterData2.map((item)=>{
                    return <div className='features-content'>
                        <p>{item.text}</p>
                    </div>
                })}
            </div>
            <div className='features-container'>
                <h3>Support</h3>
                {FooterData3.map((item)=>{
                    return <div className='features-content'>
                        <p>{item.text}</p>
                    </div>
                })}
            </div>
        </div>
    </div>
  )
}

export default Footer