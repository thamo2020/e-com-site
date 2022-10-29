import React,{ useState }  from 'react'
import './Navbar.css'
import {GiHamburgerMenu} from 'react-icons/gi';
import { GoX } from "react-icons/go";
import {FiShoppingCart} from 'react-icons/fi'


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">E-com</div>
        
      </div>
      <div className="n-right">
        <div className="n-list">
        <ul >
          <li>Home</li>
          <li>Product</li>
          <li>About</li>
          <li>Contact</li>
          <button className="button n-button" ><FiShoppingCart/></button>
          
        </ul>
        
        </div>
        
        
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color='#050505' fontSize={27} onClick={() =>setToggleMenu(true)}/>
          
          {toggleMenu && (
          <div className='app__navbar-smallscreen_overlay'>
           
           <GoX fontSize={27} className="overlay__close" onClick={() =>setToggleMenu(false)}   />
            <ul className='app__navbar-smallscreen-links'>
              <li > <a href="#home">Home</a> </li>
              <li > <a href="#product">Product</a> </li>
              <li > <a href="#about">About</a> </li>
              <li > <a href="#contact">contact</a> </li>
            </ul>
          </div>
        )}
        
      </div>

    </div>
  )
}

export default Navbar