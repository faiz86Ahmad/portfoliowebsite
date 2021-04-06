import React from 'react'
import MediumHead from '../UI/MediumHead'
import SmallHead from '../UI/SmallHead';
import Image from "../../assets/images/right.jpg";
import "./style.css";
import Button from '../UI/Button';
import Tile from"../UI/Tile";

const Qualification = (props) => {
    return (
        <div className="container">
        <div data-aos="fade-right">
            <SmallHead text="education"/>
            <MediumHead text="Qualification"/>
            </div>
            <div className="flexRow justify-sb">
                <div data-aos="fade-up-right" className="my-img">
                    <img src={Image} alt="faiz" />
                   
                </div>
                <div data-aos="fade-up-right"className="button-edu">
                    <div className="mlr-10">
                    <Button label="Hire Me" />
                    </div>
                    <div>
                    <Button label="Download CV"  inverse={true}/>
                    </div>
                    
                </div>
                
        
            <div data-aos="zoom-in-up">
                <Tile
                    College="Uttaranchal University"
                    Course="B.Tech"
                    Branch="Computer Sceince and Engg."

                />     
                 <Tile
                    College="shreya public school"
                    Course="intermediate"
                    Branch="pcm"

                />     
                 <Tile
                    College="shreya public school"
                    Course="high school"
                    Branch="All subject"

                />     
            </div>   
        </div>
        </div>
    )
}

export default Qualification;
