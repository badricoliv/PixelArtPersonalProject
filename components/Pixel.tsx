import React, { useState } from 'react';
import "../styles/pixel.scss";

interface gridProps {
    pixelColor:string
    pixelBorder:string
    pixelSize:string
    fill:boolean

}

export default function Pixel(props:gridProps) {
    var pixelColor:string = props.pixelColor
    const [color,setColor] = useState('#FFFFFF')
    if(props.fill) {
        setColor(pixelColor)
    }
    function changeColor(colorParam:string) {
        setColor(colorParam)
    }
    return (
        <div
            className='pixel'
            onClick={() => changeColor(pixelColor)}
            style={{backgroundColor:color,width:props.pixelSize,height:props.pixelSize,border:props.pixelBorder}}></div>
    )
}
