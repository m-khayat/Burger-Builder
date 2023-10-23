import React from "react";
import Aux from '../../hoc/Auxiliary';
import './Layout.css';
import ToolBar from './Navigation/Toolbar/Toolbar'
const layout = (props) =>{
    return( 
    <Aux>
        <ToolBar/>
        <main className="Content">{props.children} </main>
    </Aux>
    )
};
export default layout;