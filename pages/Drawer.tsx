import React, { useState } from 'react';
import {Text, TouchableOpacity, TextInput} from 'react-native';
import Grid from '../components/Grid';
import "../styles/drawer.css";
import { HexColorPicker, HexColorInput} from "react-colorful";
import { exportComponentAsJPEG, exportComponentAsPDF, exportComponentAsPNG } from 'react-component-export-image';

interface drawerProps {
    width:number
    height:number
}
export default function Drawer (props:drawerProps) {

    
    const [origColor,setNewColor] = useState('#000000')
    const [border, setBorder] = useState('1px solid #999999');
    const [size, setSize] = useState('20px')
    const [width, setWidth] = useState("20")
    const [widthNo, setWidthNo] = useState(20)
    const [height, setHeight] = useState("20")
    const [heightNo,setHeightNo] = useState(20)

    const [fill, setFill] = useState(false)
    function borderOff() {
        setBorder('0px solid #999999')
        setSize('22px')
    }
    function borderOn() {
        setBorder('1px solid #999999')
        setSize('20px')
    }
    function widthStringToNo() {
        const no = Number(width)
        if(no > 0 && no <= 64) {
            setWidthNo(no)
        } else if(no > 64) {
            setWidthNo(64)
            setWidth("64")
        } else {
            setWidthNo(1)
            setWidth('1')
        }
        
    }
    function heightStringToNo() {
        const no = Number(height)
        if(no > 0 && no <= 32) {
            setHeightNo(no)
        } else if(no > 32) {
            setHeightNo(32)
            setHeight("32")
        } else {
            setHeightNo(1)
            setHeight('1')
        }
        
    }

    const pixSize = Math.sqrt(256)
    return (
        <div id='home'>
            <div className ='item' id='grid'>
                <Grid pixelColor={origColor} pixelBorder={border} gridWidth= {widthNo} gridHeight={heightNo} pixelSize={size}fill={fill}/>
            </div>
            <div className = 'item' id = 'options'>
                <TouchableOpacity onPress={borderOn}>Grid Lines On</TouchableOpacity>
                <TouchableOpacity onPress={borderOff}>Grid Lines Off</TouchableOpacity>
                <HexColorPicker color={origColor} onChange={setNewColor} />
                <HexColorInput color={origColor} onChange={setNewColor} />
                <TextInput
                    onChangeText={setWidth}
                    onSubmitEditing={widthStringToNo}
                    value={width} />
                <TextInput
                    onChangeText={setHeight}
                    onSubmitEditing={heightStringToNo}
                    value={height} />
            </div>

        </div>
    );
}

