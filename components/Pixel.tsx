import React, { useState } from 'react';

interface gridProps {
    pixelColor:string
    pixelBorder:string
    pixelSize:string
    fill:boolean

}
/**
 * This is the components for each pixel. It is a square that when clicked on, will change it's
 * background colour to the colour passed in from the props.
 * @param props - passes in the pixel color (used when pixel is clicked on), the size of the border,
 *                the size of the pixel and whether the user is trying to fill the grid (future
 *                feature)
 * @returns - a clickable square
 */
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
            style={{backgroundColor:color,
                width:props.pixelSize,
                height:props.pixelSize,
                border:props.pixelBorder}}></div>
    )
}
