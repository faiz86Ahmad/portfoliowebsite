import React from 'react'

const MediumHead = ({text,style}) => {
    return (
        <div>
         <p 
         style={style}
         className="font-25 capitalize text-center ls-1 textcolor bold-600">{text}</p>
        </div>
    )
}

export default MediumHead;
