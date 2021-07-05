import React, { useState } from 'react';

import Pixel from "./Pixel"

interface gridProps {
    pixelColor:string
}

export default function Rows (props:gridProps) {
    var color:string = props.pixelColor
    var pixels = []

    for(var i:number = 0; i < 20; i++) {
        pixels.push(<Pixel pixelColor={color}/>)
    }
    return (
        <div id='rows'>
            {pixels}
        </div>
    )
}