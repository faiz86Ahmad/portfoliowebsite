import React from 'react';
import MediumHead from '../UI/MediumHead';
import SmallHead from '../UI/SmallHead';
import Card from "../UI/Card/index";
import Skill from "../UI/skill/index";
import {colors} from "../../style";

const Specializing = (props) => {
    const skills = [
        {
            skillName:"HTML/CSS",
            desc:"hands on experiance in html/css",
            value:"75",
            textColor:colors.primaryColor,
            pathColor:"#f2a154"


        },
        {
            skillName:"JAVASCRIPT",
            desc:"hands on experiance in javascript",
            value:"70",
            textColor:colors.primaryColor,
            pathColor:"#f9F871"


        },
        {
            skillName:"BOOTSTRAP",
            desc:"hands on experiance in bootstrap",
            value:"75",
            textColor:colors.primaryColor,
            pathColor:"blue"


        },
        {
            skillName:"JQUERY",
            desc:"hands on experiance in jquery......",
            value:"70",
            textColor:colors.primaryColor,
            pathColor:"red"


        },
        {
            skillName:"REACTJS",
            desc:"hands on experiance in Reactjs",
            value:"70",
            textColor:colors.primaryColor,
            pathColor:"#301b3f"


        },
        {
            skillName:"NODE",
            desc:"hands on experiance in NodeJs.....",
            value:"60",
            textColor:colors.primaryColor,
            pathColor:"#fed049"


        },
        {
            skillName:"EXPRESS",
            desc:"hands on experiance in express",
            value:"65",
            textColor:colors.primaryColor,
            pathColor:"green"


        },
        {
            skillName:"MONGODB",
            desc:"hands on experiance in mongodb",
            value:"70",
            textColor:colors.primaryColor,
            pathColor:"#1f441e"


        }
    ]
    return (
        <div className='container'>
           
            <Card style={{padding:"50px"}}>
            <SmallHead text="what i do"/>
            <MediumHead text="Specializing In"/>
            <div data-aos="fade-up" className="flexRow wrap justify-sb" style={{padding:"30px"}}>
                {
                    skills.map((skill,index)=>(     
            
            <Skill 
            key={index}
            skillName={skill.skillName}
            desc={skill.desc}
            value={skill.value}
            textColor={colors.primaryColor}
            pathColor={skill.pathColor}
            />
                    ))
    }
            </div>

           

           </Card>
            
        </div>
    )
}

export default Specializing;
