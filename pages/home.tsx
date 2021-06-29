import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Grid, ServerStyleSheets, StylesProvider } from '@material-ui/core';
import { AlertManager, useAlert } from 'react-alert'


const Home = () => {
    var text : Number = 1
    const [origColor,setNewColor] = useState('#000000')
    const [count, setCount] = useState(0); //This is a hook, allowing for dynamic changes to the display
    const gridColors = ['#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
    '#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF','#FFFFFF',
                    ]
    
    return (
        <View style={[styles.container,{backgroundColor:'#FFFFFF'}]}>
            <View style={styles.grid}>
                {gridColors.map((squareColor) => {
                    const [color,setColor] = useState(squareColor)
                    return (
                        <TouchableOpacity onPress={()=>{setColor(origColor)}}>
                            <View style={[styles.square,{backgroundColor:(color)},{borderWidth:count}]}></View>
                        </TouchableOpacity>
                    )
                })}
            </View>
            <TouchableOpacity onPress={()=>{setNewColor('#FFFFFF')}}>White</TouchableOpacity>
            <TouchableOpacity onPress={()=>{setNewColor('#000000')}}>Black</TouchableOpacity>
            <TouchableOpacity onPress={()=>{setNewColor('#ff0000')}}>Red</TouchableOpacity>
            <TouchableOpacity onPress={()=>{setNewColor('#999999')}}>Grey</TouchableOpacity>


            <TouchableOpacity onPress={()=>{setCount(1)}}>Grid</TouchableOpacity>
            <TouchableOpacity onPress={()=>{setCount(0)}}>No Grid</TouchableOpacity>

        </View>
    );
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

        justifyContent: 'center',
    },
    grid: {
        width: 502,
        height:500,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 0,
      borderWidth:1
    },
    square: {
        margin: 0,
        width: 50,
        height: 50,
    }
  });

export default Home