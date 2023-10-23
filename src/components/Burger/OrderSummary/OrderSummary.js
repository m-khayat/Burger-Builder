import React from "react";
import './OrderSummary.css'
const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredient).map(igkey =>{
      return(
      <li key={igkey}>
       <span style={{textTransform:"capitalize"}} >{igkey}</span>: {props.ingredient[igkey]}
      </li>)  
    })
    return(
        <div className="OrderSummary" >
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Total Price: <strong>{props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout ?</p>
            <button className="Button-dangerus" onClick={props.canceled} >CANCEL</button>
            <button className="Button-success" onClick={props.continue} >CONTINUE</button>
        </div>
    )
}

export default orderSummary;