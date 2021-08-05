import React, { useState } from 'react';
import {Text, TouchableOpacity} from 'react-native';
import Grid from '../components/Grid';
import "../styles/home.scss";
import {SketchPicker,CirclePicker} from 'react-color'
import { HexColorPicker, HexColorInput} from "react-colorful";
import { useHistory } from 'react-router-dom';

interface size {
    width:number
    height:number
}

export default function Home () {
    const history = useHistory();
    return (
        <div>
            <TouchableOpacity onPress={() => {
                history.push({
                    pathname:"/drawer",
                    state:[{width: 20, height:20}]
                })
            }}>
                Start Drawing!
            </TouchableOpacity>

        </div>


    );
}

