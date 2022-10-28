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
            ABOUT IT ...</p>
            <button className="i-button button"> BUY IT</button>
           
         
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
