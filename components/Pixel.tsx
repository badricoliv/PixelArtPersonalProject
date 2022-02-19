import React, { useState } from 'react';

interface gridProps {
    pixelColorLeft:string
    pixelColorRight:string
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
    var pixelColorLeft:string = props.pixelColorLeft
    var pixelColorRight:string = props.pixelColorRight
    const [color,setColor] = useState(pixelColorLeft)

    if(props.fill) {
        setColor(pixelColorLeft)
    }
    function changeColor(colorParam:string) {
        setColor(colorParam)
    }

    //makes it so right clicking doesn't show menu
    oncontextmenu = function(e) {
        e.preventDefault();
    }
    
    return (
        <div
            className='pixel'
            onAuxClick={() => changeColor(pixelColorRight)}
            onClick={() => changeColor(pixelColorLeft)}
            style={{backgroundColor:color,
                width:props.pixelSize,
                height:props.pixelSize,
                border:props.pixelBorder}}></div>
    )
}
