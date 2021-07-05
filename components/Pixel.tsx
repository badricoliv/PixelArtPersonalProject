import React, { useState } from 'react';
import "../styles/pixel.scss";

interface gridProps {
    pixelColor:string
}

export default function Pixel(props:gridProps) {
    var color:string = props.pixelColor
    const [origColor,setColor] = useState('#FFFFFF')
    function changeColor() {
        setColor(color)
    }
    return (
        <div
            className='pixel'
            onClick={changeColor}
            style={{backgroundColor:origColor,width:'20px',height:'20px',border:'1px solid #999999'}}></div>
    )
}
