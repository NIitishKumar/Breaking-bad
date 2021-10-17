
import React, { useEffect,useState } from 'react'
import axios from 'axios'
import Image from './Image'



const Card = () => {

        const [item, setitem] = useState([])
        useEffect(() => {
            const data = axios.get('https://www.breakingbadapi.com/api/characters').then(x => setitem(x.data))
            console.log(item);
        }, [])
    
    return (
        <div className='image-container'>
            {item.map(x => {
                return <>
                <div className='mainContainer'>
                    <div className='theCard'>
                        <div className='theFront'>
                        <div className='imageContainer'>
                            <Image imgPath={x.img} />
                        </div>
                        </div>
                        <div className='theBack'>
                        {console.log(x)}
                        <img src={x.img} style={{height : '120px'}} />
                            <p>Name : {x.name}</p>
                            <p>NickName : {x.nickname}</p>
                            <p>Status : {x.status}</p>
                            <p>Occupation : {x.occupation[0]}</p>
                        </div>
                    </div>
                </div>
                </>
            })}
        </div>
    )
}

export default Card
