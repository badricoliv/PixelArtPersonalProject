import React, { useState } from 'react';
import { BrowserRouter, Route } from "react-router-dom";

import {Text, TouchableOpacity} from 'react-native';

export default function SelectionWindow() {
    return (
        <div id='selectionWindow'>
            <Text>Pixel Art Maker</Text>
        </div>
        // <BrowserRouter>
        //     <Route path = "/" component = {SelectionWindow} />
        // </BrowserRouter>
    );
}