import React from 'react';
import SocialIcon from '../UI/socialIcons';
import "./style.css"
import Image from "../../assets/images/chat.jfif";


const Footer = () => {
    return (
        <div className="container">
            <div data-aos="fade-right" className="flexRow justify-sb align-center">
            <div  style={{margin:"50px 0"}}>
                <SocialIcon />


            </div>
           
           
           
            <div className="chat-pic">
               <a href="https://faizmsgapp.herokuapp.com/"><img src={Image} alt="chat" /></a> 
            </div>

            </div>
           
            
        </div>
    )
}

export default Footer;
