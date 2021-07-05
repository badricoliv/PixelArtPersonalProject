import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Pixel from '../components/Pixel';
import Grid from '../components/Grid';
import "../styles/home.scss";


export default function Home () {
    const [origColor,setNewColor] = useState('#FFF000')
    const [count, setCount] = useState(1); //This is a hook, allowing for dynamic changes to the display
    const size:Number = 256
    const pixSize = Math.sqrt(256)
    const colorSelection = ['#FFFFFF','#000000','#FF0000','#FFF000','#0001FC','#999999']
    return (
        <div id='home' style={{alignItems:'center'}}>
            <Text>Pixel Art Maker</Text>
            <Grid pixelColor={origColor}/>
            {colorSelection.map((colorSelec) => {
                return (
                    <TouchableOpacity onPress={()=>{setNewColor(colorSelec)}}>{colorSelec}</TouchableOpacity>
                )
            })}
        </div>
    );
}

