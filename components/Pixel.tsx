import React, { useState } from 'react';
import "../styles/pixel.scss";

interface gridProps {
    pixelColor:string
    pixelBorder:string
    pixelSize:string

}

export default function Pixel(props:gridProps) {
    var pixelColor:string = props.pixelColor
    const [color,setColor] = useState('#000000')
    return (
        <div
            className='pixel'
            onClick={() => setColor(pixelColor)}
            style={{backgroundColor:color,width:props.pixelSize,height:props.pixelSize,border:props.pixelBorder}}></div>
    )
}
