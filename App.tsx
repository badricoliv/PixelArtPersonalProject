import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/home";
import Drawer from "./pages/Drawer";


export default function App() {
  return (
    <BrowserRouter>
        <Route path = "/" exact= {true} component = {Drawer} />
      <Route path = "/home" exact= {true} component = {Home} />
      <Route path = "/drawer" component = {Drawer} />
  </BrowserRouter>
  );
}