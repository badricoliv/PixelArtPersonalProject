import React, { useState } from 'react';

import Pixel from "./Pixel"

interface gridProps {
    pixelColor:string
    pixelBorder:string
    gridHeight:number
    pixelSize:string
    fill:boolean

}

export default function Rows (props:gridProps) {
    var color:string = props.pixelColor
    var border:string = props.pixelBorder
    var height:number = props.gridHeight
    var pixels = []

    for(var i:number = 0; i < height; i++) {
        pixels.push(<Pixel pixelColor={color} pixelBorder={border} pixelSize={props.pixelSize}fill = {props.fill}/>)
    }
    return (
        <div id='rows'>
            {pixels}
        </div>
    )
}