import React from "react";
import './Modal.css';
import BackDrop from '../BackDrop/BackDrop';
import Aux from '../../../hoc/Auxiliary';
const modal = (props) => (
    <Aux>
        <BackDrop show = {props.showCheckout} clicked={props.dismissCheckOut} />
        <div className="Modal" style={{
                transform: props.showCheckout ? 'translateY(0)' : 'translateY(-100vh)',
                opacity: props.showCheckout ? '1' : '0' 
                }} >
                {props.children}
        </div>
    </Aux>
   
)

export default modal;