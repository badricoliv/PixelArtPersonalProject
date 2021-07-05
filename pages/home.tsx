import React, { useState } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Grid from '../components/Grid';
import "../styles/home.scss";


export default function Home () {
    const [origColor,setNewColor] = useState('#FFF000')
    const [border, setBorder] = useState('1px solid #999999');
    const [size, setSize] = useState('20px')
    const width:number = 40
    const height:number = 20
    function borderOff() {
        setBorder('0px solid #999999')
        setSize('22px')
    }
    function borderOn() {
        setBorder('1px solid #999999')
        setSize('20px')
    }
    

    const pixSize = Math.sqrt(256)
    const colorSelection = ['#FFFFFF','#000000','#FF0000','#FFF000','#0001FC','#999999']
    return (
        <div id='home' style={{alignItems:'center'}}>
            <Text>Pixel Art Maker</Text>
            <Grid pixelColor={origColor} pixelBorder={border} gridWidth={width} gridHeight={height} pixelSize={size}/>
            {colorSelection.map((colorSelec) => {
                return (
                    <TouchableOpacity onPress={()=>{setNewColor(colorSelec)}}>{colorSelec}</TouchableOpacity>
                )
            })}
            <TouchableOpacity onPress={borderOn}>Grid Lines On</TouchableOpacity>
            <TouchableOpacity onPress={borderOff}>Grid Lines Off</TouchableOpacity>

        </div>
    );
}

