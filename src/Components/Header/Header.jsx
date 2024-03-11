import React from 'react'
import './Header.css'
import { Switch } from "@material-tailwind/react";
import headerimage from '../../assets/images/headerImage.png'


const Header = () => {
  return (
    <div className='header'>
        <div className='header-body'>
            <div className='header-body-content'>
                <Switch defaultChecked/> 
                <h1>ThroneCraft <span>Furniture</span> New Mobile App</h1>
                <div className='mt-4'><p>Giving Home a proper makeover never was this easy. Modern Stylish furniture for decent prices. Take a look at what we offer with simple button click</p>
                <div className='header-body-button'>
                  <button className='pushable'>
                    <span className='front'>Start Now</span>
                  </button>
                </div>
                </div> 

                </div>
            <div className='header-body-content-right' >
              <div>
                <h2></h2>
              </div>
              <img className='custom-header' src={headerimage} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Header