import React from "react";
import BuildControl from './BuildControl/BuildControl'
import './BuildControls.css'

const control = [
    {label: 'Salad', type: 'salad'},
    {label: 'Salame', type: 'salame'},
    {label: 'Cheese', type: 'cheese'},
    {label: 'Meat', type: 'meat'}

]

const buildControls = (props) => (
    <div className="BuildControls">
        <p>Total Price: <strong>{props.price.toFixed(2)}</strong> </p>
        {control.map(ctrl => (
            <BuildControl
                key={ctrl.label}
                label={ctrl.label}
                added={() => props.ingredientAdded(ctrl.type)}
                removed={() => props.ingredientRemoved(ctrl.type)}
                desabled={ props.desabled[ctrl.type]}
                />
                
        ))}
        
        <button className="OrderButton" disabled={!props.purchaseable} onClick={props.checkout}  >ORDER NOW</button>
    </div>
)
export default buildControls