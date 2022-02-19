import React from 'react';
import Rows from "./Rows"
interface gridProps {
    pixelColorLeft:string
    pixelColorRight:string
    pixelBorder:string
    gridWidth:number
    gridHeight:number
    pixelSize:string
    fill:boolean
}
/**
 * The grid component is an array of row components
 * @param props - passes in the pixelColor (for use when a pixel is clicked), the pixel border size,
 *                the grid width and height, the pixel size and whether it is filling all pixels or not
 *                (future feature)
 * @returns - an array of Rows components
 */
export default function Grid (props:gridProps) {

    var colorLeft = props.pixelColorLeft
    var colorRight = props.pixelColorRight
    var border = props.pixelBorder
    var width = props.gridWidth
    var height = props.gridHeight
    var rows = []
    var ref = React.createRef
    for(var i:number = 0; i < width; i++) {
        rows.push(<Rows pixelColorLeft={colorLeft} pixelColorRight={colorRight} pixelBorder={border} gridHeight={height} pixelSize={props.pixelSize} fill={props.fill}/>)
    }
    return (
        <div ref={ref} id='Grid' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            {rows}
        </div>
    )
}