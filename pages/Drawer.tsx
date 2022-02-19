import React, { useState } from 'react';
import { Text, TouchableOpacity, TextInput } from 'react-native';
import Grid from '../components/Grid';
import "../styles/drawer.css";
import { HexColorPicker, HexColorInput } from "react-colorful";
import { Button, Input, Drawer, AppBar, Toolbar, IconButton } from '@material-ui/core';
import MenuIcon from '@mui/icons-material/Menu';
/**
 * Main page of the application. Gets the grid from the Grid component. Has buttons to toggle the grid
 * lines on and off (the size of the squares has to be increased slightly when the grid lines are
 * toggled off). Also uses the HexColorPicker and HexColorInput to change the colour.
 */
export default function Draw() {
    const [origColorLeft, setNewColorLeft] = useState('#ffffff')
    const [origColorRight, setNewColorRight] = useState('#ffffff')

    const [sideBar, setSidebar] = useState(false);

    const [border, setBorder] = useState('1px solid #999999');
    const [borderBool, setBorderBool] = useState(true);

    const [size, setSize] = useState('20px')

    const [width, setWidth] = useState("64")
    const [widthNo, setWidthNo] = useState(64)
    const [height, setHeight] = useState("27")
    const [heightNo, setHeightNo] = useState(27)

    const [fill, setFill] = useState(false)

    function borderToggle() {
        if(borderBool) {
            setBorder('0px solid #999999')
            setSize('22px');
            setBorderBool(false);
        } else {
            setBorder('1px solid #999999')
            setSize('20px')
            setBorderBool(true);
        }
    }

    function widthStringToNo() {
        const no = Number(width)
        if (no > 0 && no <= 64) {
            setWidthNo(no)
        } else if (no > 64) {
            setWidthNo(64)
            setWidth("64")
        } else {
            setWidthNo(1)
            setWidth('1')
        }
    }
    function heightStringToNo() {
        const no = Number(height)
        if (no > 0 && no <= 27) {
            setHeightNo(no)
        } else if (no > 27) {
            setHeightNo(27)
            setHeight("32")
        } else {
            setHeightNo(1)
            setHeight('1')
        }
    }

    return (
        <div id='home'>
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={() => setSidebar(true)}
                    >
                        <MenuIcon/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <div className='item' id='grid' >
                <Grid pixelColorLeft={origColorLeft} 
                    pixelColorRight={origColorRight} 
                    pixelBorder={border} 
                    gridWidth={widthNo} 
                    gridHeight={heightNo} 
                    pixelSize={size} 
                    fill={fill} 
                />
            </div>
            <Drawer 
            open={sideBar}
            onClose={() => setSidebar(false)}>
            <div className='item' id='options'>
                <div id='border'>
                    <Button className='button' onClick={borderToggle}>Grid Lines</Button>
                </div>
                <div id='color'>
                    <HexColorPicker color={origColorLeft} onChange={setNewColorLeft} />
                    <HexColorInput color={origColorLeft} onChange={setNewColorLeft} />
                </div>
                <div id='color'>
                    <HexColorPicker color={origColorRight} onChange={setNewColorRight} />
                    <HexColorInput color={origColorRight} onChange={setNewColorRight} />
                </div>
                <div id='size'>
                    <Text>Width</Text>
                    <TextInput
                        onChangeText={setWidth}
                        onSubmitEditing={widthStringToNo}
                        value={width} />
                    <Text>Height</Text>
                    <TextInput
                        onChangeText={setHeight}
                        onSubmitEditing={heightStringToNo}
                        value={height} />
                </div>
            </div>
            </Drawer>
            
        </div>
    );
}

