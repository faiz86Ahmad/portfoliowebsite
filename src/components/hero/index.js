import React from 'react';
import "./style.css";
import me from "../../assets/images/left.jpg";
import Button from "../UI/Button";

const Hero = (props) => {
    return (
        <div className="container" style={{marginTop:"70px"}}>
            <div className="flexRow  justify-sb align-center">
            <div data-aos="fade-right">
                <p className="uppercase bold-500  ls-1 mtb-10 textColor" ><span className="primaryColor">Hello</span> ,I am Faizan Ahmad</p>
                <h1 className="ls-1 mtb-10 textColor">MERN Stack Developer</h1>
                <div className="flexRow" style={{margin:"30px 0px"}}>
                <div>
                <Button label="hire Me"/>
                </div>
                <div className="mlr-10">
                <Button label="Download CV"inverse={true}/>
                </div>
                </div>
            </div>
            <div data-aos="fade-left">
            <div className="me-img">
                <img src={me} alt="me" />
            </div>
            </div>
            
        </div>
        </div>
    )
}

export default Hero;
