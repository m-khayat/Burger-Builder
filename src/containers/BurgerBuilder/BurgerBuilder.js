import React, { Component } from "react";
import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
const INGREDIENTS_PRICES= {
    salad: 0.3,
    salame: 0.7,
    cheese: 0.9,
    meat: 1.5
}
class BurgerBuilder extends Component {
    state= {
        ingredients:{
            salad: 0,
            salame:0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchasable: false,
        checkout: false,
    }

    updatePurchaseState (ingredients) {
       
        const sum = Object.keys(ingredients).map(igkey => {
            return ingredients[igkey]
        }).reduce((sum, el) => {
            return sum + el 
        }, 0)
        this.setState({purchasable: sum > 0})
    }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCound = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCound;
        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({totalPrice: newPrice, ingredients:updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount<=0){
            return;
        }
        const updateCound = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        }
        updateIngredients[type] = updateCound;
        const priceDec = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDec;
        this.setState({totalPrice: newPrice, ingredients:updateIngredients});
        this.updatePurchaseState(updateIngredients);
    }

    checkOutHandler = () => {
        this.setState({checkout: true});
    }

    checkOutCancelHandler = () => {
        this.setState({checkout: false});
    }

    checkOutContinueHandler = () => {
        alert('HAVE A GOOD MEAL :)')
    }
    
    render(){
        const disabledInfo = {
            ...this.state.ingredients
        }
        for(let key in disabledInfo){
            disabledInfo[key] = disabledInfo[key]<=0
        }
        return(
            <Aux>
                <Modal showCheckout={this.state.checkout} dismissCheckOut={this.checkOutCancelHandler} >
                    <OrderSummary
                     ingredient={this.state.ingredients} 
                     canceled={this.checkOutCancelHandler}
                     continue={this.checkOutContinueHandler}
                     price={this.state.totalPrice}
                     />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                 ingredientAdded={this.addIngredientsHandler} 
                 ingredientRemoved={this.removeIngredientHandler}
                 desabled={disabledInfo}
                 price={this.state.totalPrice}
                 purchaseable={this.state.purchasable}
                 checkout={this.checkOutHandler}
                 />
                
            </Aux>
        );
    };
} 
export default BurgerBuilder;