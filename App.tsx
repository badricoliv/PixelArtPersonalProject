import { BrowserRouter, Route, Link } from "react-router-dom";
import React from 'react';
import Home from "./pages/home";
import Drawer from "./pages/Drawer";


export default function App() {
  return (
    <BrowserRouter>
        <Route path = "/" exact= {true} component = {Home} />
      <Route path = "/home" exact= {true} component = {Home} />
      <Route path = "/drawer" component = {Drawer} />
  </BrowserRouter>
  );
}