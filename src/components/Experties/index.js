import React from 'react';
import SmallHead from  "../UI/SmallHead";
import MediumHead from "../UI/MediumHead";
import 'react-circular-progressbar/dist/styles.css';
import {CircularProgressbar,buildStyles} from "react-circular-progressbar";
import {colors} from '../../style';
import Card from  "../UI/Card/index";
import Image from "../../assets/images/right.jpg";
import "./style.css";
import SocialIcon from '../UI/socialIcons';

const Expert = (props) => {
    const percentage = "70";
    return (
        <div className="container" style={{marginTop:"50px",padding:"20px"}}>
            <div data-aos="fade-right" className="my-img">
                <img src={Image} alt="myimage"/>
            </div>
            
            <div data-aos="fade-right">
            <SmallHead text="Experties" />
            <MediumHead  text="Special Skills"/>
            </div>

            <Card  data-aos="flip-up" style={{ marginTop:"100px",padding:"30px", width:"320px",float:"right"}}>
                <div className="flexRow align-center">
                <div style={{width:"80px" , height:"80px" }}>
            <CircularProgressbar
         value={percentage}
         text={`${percentage}%`}
         styles={buildStyles({
         textColor:colors.primaryColor,
         pathColor:colors.primaryColor,

            })}
           />
             </div>
            <h2 className='textColor mlr-10'>Development</h2>
            </div>
            <p className="grey mtb-10 font-14">javascript is one of the best programming language.</p>
            </Card>
           <div data-aos="fade-right" className='social-icons'>
           
            <SocialIcon />
            </div>
        </div>
        
    );
};

export default Expert;
