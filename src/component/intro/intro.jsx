import React from "react";
import "./intro.css";
import images from '../../constant/images'

const Intro = () => {
  // Transition
  const transition = { duration: 2, type: "spring" };

 
  return (
    <div className="Intro" id="Intro">
     
      <div className="i-left">
        <div className="i-name">
         
          <span >Hy! Welcome to</span>
          <span>E - COM</span>
         
            <p className="i-para">IF YOU CAN'T <br />
            STOP THINKING<br />
            ABOUT IT,
            BUY IT</p>
            <div className="row">
            <button className="i-button button">SIGN IN</button>
            <button className="i-button button">SIGN UP</button>
            </div>
            
           
         
        </div>
        
       
       
      </div>
      {/* right image side */}
      <div className="i-right">
        
        <img src={images.cart}  alt="" className ="i-right-image" />
        
        

       
      </div>
    </div>
  );
};

export default Intro;
