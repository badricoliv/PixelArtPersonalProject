import React, { useState } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Grid from '../components/Grid';
import "../styles/home.scss";
import {SketchPicker,CirclePicker} from 'react-color'
import { HexColorPicker } from "react-colorful";


export default function Home () {
    const [origColor,setNewColor] = useState('#FFF000')
    const [border, setBorder] = useState('1px solid #999999');
    const [size, setSize] = useState('20px')
    const width:number = 20
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
    return (
        <div id='home' style={{alignItems:'center',backgroundColor:'#BBBBBB'}}>
            <Text>Pixel Art Maker</Text>
            <Grid pixelColor={origColor} pixelBorder={border} gridWidth={width} gridHeight={height} pixelSize={size}/>
            <TouchableOpacity onPress={borderOn}>Grid Lines On</TouchableOpacity>
            <TouchableOpacity onPress={borderOff}>Grid Lines Off</TouchableOpacity>
            <HexColorPicker color={origColor} onChange={setNewColor}/>
        </div>
    );
}

