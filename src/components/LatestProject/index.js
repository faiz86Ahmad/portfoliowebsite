import React from 'react';
import Card from "../UI/Card/index";
import MediumHead from '../UI/MediumHead';
import SmallHead from '../UI/SmallHead';
import Image from "../../assets/social-icons/chatapp.jpg";
import "./style.css";
import Button  from "../UI/Button"

const LProject = (props) => {
    return (
        <div data-aos="zoom-in-up" className="container" style={{marginTop:"50px",marginBottom:"50px",padding:"20px"}}>
            <Card style={{display:"flex",alignItems:"center",justifyContent: "space-between"}}>
                <div style={{display:"flex",flex:"1",justifyContent:"center",flexDirection:"column"}}>
            <SmallHead text="Portfolios"/>
            <MediumHead text="LatestProject" style={{textTransform:"uppercase"}}/>
            <div className="flexRow mtb-10" style={{justifyContent:"center"}}>
                <a href="https://faizmsgapp.herokuapp.com/"><button  className="portbtn">Portfolio</button></a>
            </div>
           
            </div>
            <div className="project-img">
                <img src={Image} alt="protfolio"/>
            </div>

            </Card>
            
        </div>
    )
}

export default LProject
