import {React, useState, useEffect} from "react"
import axios from 'axios'
import Card from "./Card"

const Character = () => {

    const [item, setitem] = useState([])
    useEffect(async () => {
        const data = await axios.get('https://www.breakingbadapi.com/api/characters').then(x => setitem(x.data))
        console.log(data);
    }, [])

    return <>
        {item.map(x => { 
            <Card imgSrc={x.img} />
        })}
    </>
}

export default Character;