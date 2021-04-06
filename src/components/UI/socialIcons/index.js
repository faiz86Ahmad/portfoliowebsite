import React from 'react';
import Socialicon from "../../../assets/social-icons/index";
import "./style.css";

const SocialIcon = (props) => {
    return (
        <div  className="social-connect">
           <span  className="font-16 bold-600"style={{color:"black"}}>Follow me on:</span>
          <a className="social-link" href="https://www.facebook.com/faizan.ahamad.3572/">
              <img src={Socialicon.facebook} alt="fb"/>
         </a>  
          <a className="social-link" href="https://www.instagram.com/faizan.ahamad.3572/">
              <img src={Socialicon.instagram} alt="inst"/>
          </a>  
          <a className="social-link" href="https://www.linkedin.com/in/faizan-ahmad-322684154/">
              <img src={Socialicon.linkedin} alt="link"/>
          </a>  
        </div>
    )
}

export default SocialIcon;
