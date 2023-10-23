import React from "react";
import './Toolbar.css';
import Logo from '../../../UI/Logo/Logo'
import Navigation from '../Navigation'
const toolbar = (props) =>(
    <header className="ToolBar">
        <Logo/>
        <Navigation/>
    </header>
)

export default toolbar