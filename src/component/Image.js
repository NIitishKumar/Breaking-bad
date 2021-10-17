import React from 'react'

const image = ({imgPath}) => {
    return (
        <div>
           <img  id='card-img' src={imgPath} /> 
        </div>
    )
}

export default image