import { BrowserRouter, Route } from "react-router-dom";
import React from 'react';
import Home from "./pages/home";


export default function App() {
  return (
    <BrowserRouter>
      <Route path = "/" component = {Home} />
  </BrowserRouter>
  );
}