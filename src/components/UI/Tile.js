import React from 'react'

const Tile = ({College,Course,Branch}) => {
    return (
        <div className="mtb-10" style={{background:"#fff",padding:"20px",width:"300px"}}>
            <p className="primaryColor bold-600 font-16 mtb-10 uppercase">{College}</p>
            <p className="textColor bold-600 font-14 mtb-10 uppercase">{Course}</p>
            <p className='grey font-12 mtb-10 uppercase'>{Branch}</p>
        </div>
    )
}

export default Tile;
