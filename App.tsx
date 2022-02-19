import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/home";
import Draw from "./pages/Drawer";


export default function App() {
  return (
    <BrowserRouter>
        <Route path = "/" exact= {true} component = {Draw} />
  </BrowserRouter>
  );
}