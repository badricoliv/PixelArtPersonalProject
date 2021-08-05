import React, { useState } from 'react';
import Rows from "./Rows"
interface gridProps {
    pixelColor:string
    pixelBorder:string
    gridWidth:number
    gridHeight:number
    pixelSize:string
}
export default function Grid (props:gridProps) {

    var color = props.pixelColor
    var border = props.pixelBorder
    var width = props.gridWidth
    var height = props.gridHeight
    var rows = []
    var ref = React.createRef
    for(var i:number = 0; i < width; i++) {
        rows.push(<Rows pixelColor={color} pixelBorder={border} gridHeight={height} pixelSize={props.pixelSize}/>)
    }
    return (
        <div ref={ref} id='Grid' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            {rows}
        </div>
    )
}