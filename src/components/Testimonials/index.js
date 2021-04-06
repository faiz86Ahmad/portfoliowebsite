import React from 'react';
import MediumHead from '../UI/MediumHead';
import SmallHead from  "../UI/SmallHead";
import Image from '../../assets/images/c-a.jpg';
import ImageB from '../../assets/images/c-2.jpg';
import ImageC from '../../assets/images/man-icon.png';
import Card from "../UI/Card/index";

import "./style.css";

const Testimonials = (props) => {
    return (
        <div  className="container" style={{marginTop:"50px"}}>
            <div data-aos="fade-right" className="mtb-10">
            <SmallHead text="Testimonials"/>
            <MediumHead text="what people says"/>
            
            </div>
            <div className="flexRow warp" data-aos="zoom-in-up">
                <div className="test-img mlr-10">
                    <img src={Image} alt="pic-t" />
                </div>
                <div className="test-box mlr-10">
                    <div className="flexRow wrap" >
                    <div className="man_icon">
                        <img src={ImageC} alt="man" />
                    </div>
                    <div>
                <h3 className="mtb-10">Faizan Ahmad</h3>
                <h5 className=" primaryColor mtb-10">Web Developer</h5>
                </div>
               
                </div >
                
                
                <p>
                    Hello Everyone! This i faizan ahmad i am mern stack developer having knowledge in web development and also i have done 3/4 training in web development but i am not working in any company as i am fresher but i developed frontend and backened.This i my portfolio website you can see my project on portfolio page
                     And give me on chance for being a part of your company.i will try my level best  
                      for growth of the company.giThank you so much..
                </p>

                </div>
                <div className="test-img mlr-10">
                    <img src={ImageB} alt="pic-t" />
                </div>
            </div>
           
            <Card  data-aos="fade-up-right"style={{width:"500px",padding:"30px",textAlign:"center",margin:"0 auto"}}>
                <p> can you Hire me i am available? <span className="primaryColor">Say hello !</span></p>
                <p className="font-20">Email:faizan89ahmad@gmail.com</p>
                <p className="font-18">phone no:7088494023</p>

            </Card>
            
        </div>
    )
}

export default Testimonials;
