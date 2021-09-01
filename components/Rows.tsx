import React, { useState } from 'react';

import Pixel from "./Pixel"

interface gridProps {
    pixelColor:string
    pixelBorder:string
    gridHeight:number
    pixelSize:string
    fill:boolean

}
/**
 * This component is an array of Pixel components.
 * @param props - passes in the pixelColor (for use when a pixel is clicked), the pixel border size,
 *                the grid height, the pixel size and whether it is filling all pixels or not
 *                (future feature)
 * @returns - an array of Pixel components
 */
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