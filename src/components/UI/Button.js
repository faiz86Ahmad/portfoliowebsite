import React from 'react';
import{colors} from  "../../style";
import File from "../../components/faizresume.pdf"

const Button = (props) => {
    return <a href={File} style={{
        padding:"10px 20px",
        background:props.inverse ? "transparent" : colors.primaryColor,
        color:props.inverse ? colors.primaryColor : "#fff",
        display:"inlineblock",
        borderRadius:"20px",
        boxShadow:props.inverse ? "none": "#6dba6d 0px 0px 10px 0px",
        border:"1px solid",
        borderColor:props.inverse ? colors.primaryColor: "transparent"
    }} download >{props.label}</a>
}

export default Button;
