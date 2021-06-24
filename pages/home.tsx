import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Grid, ServerStyleSheets, StylesProvider } from '@material-ui/core';


const Home = () => {
    const [count, setCount] = useState(0); //This is a hook, allowing for dynamic changes to the display
    const gridColors = ['FFF000','FFF000','FFF000','FFF000','FFF000',
                        'FFF000','FFF000','FFF000','FFF000','FFF000',
                        'FFF000','FFF000','FFF000','FFF000','FFF000',
                        'FFF000','FFF000','FFF000','FFF000','FFF000',
                        'FFF000','FFF000','FFF000','FFF000','FFF000'
                    ]
    return (
        <View style={[styles.container,{backgroundColor:'#FFFFFF'}]}>
            <View style={styles.grid}>
                {gridColors.map((squareColor) => {
                    return (
                        <View style={[styles.square,{backgroundColor:(squareColor)}]}></View>
                    )
                })}
            </View>
        </View>

    );
    
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',

        justifyContent: 'center',
    },
    grid: {
        width: 300,
        height:250,
      flex: 1,
      flexDirection: 'row',
      flexWrap: 'wrap',
      padding: 2,
    },
    square: {
        margin: 0,
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#000000',
    }
  });

export default Home