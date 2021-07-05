import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';


import Pixel from "./Pixel"
import Rows from "./Rows"
interface gridProps {
    pixelColor:string
}
export default function Grid (props:gridProps) {
    var color = props.pixelColor
    var rows = []

    for(var i:number = 0; i < 20; i++) {
        rows.push(<Rows pixelColor={color}/>)
    }
    return (
        <div id='Grid' style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
            {rows}
        </div>
    )
}