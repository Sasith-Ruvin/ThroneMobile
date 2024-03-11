import React,{useState, useEffect} from 'react';
import {navbarData} from '../../DataForPage/dummyData';
import logo from '../../assets/images/Throne.svg'
import { Link } from 'react-scroll';
import './Navbar.css';


const Navbar = () => {
  const [scroll,setScroll] = useState(false);
  const handleScroll = () =>{
    if(window.scrollY > 50){
      setScroll(true);
    }
    else{
      setScroll(false);
    }
  };
  useEffect(()=>{
    window.addEventListener('scroll',handleScroll)
    return () =>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[scroll])

  return (
    <div>
      <div className={`navbar ${scroll ? 'scrolled' : ''}`}>
        <div className='logo'>
          <div className='logo-container'>
            <img src={logo} alt="Logo" />
          </div>
          <div className='navbar-links'>{navbarData.map((item) => {
            return <div key={item.id}>
              <Link to={item.link} 
              spy={true} 
              smooth={true}
              hashSpy={true}
              offset={50}
              duration={500}
              isDynamic={true}
              ignoreCancelEvents={false}
              spyThrottle={500}
                >
                  {item.name}
                </Link>
              </div>
          })}</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
