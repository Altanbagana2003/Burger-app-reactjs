import React, { Component } from "react";
import Burger from "../../components/Burger";
import BuildControls from "../../components/BuildControls";
import Modal from "../../components/General/Modal";
import OrderSummary from "../../components/OrderSummary";
import axios from "../../axios-orders";
import Spinner from "../../components/General/Spinner";

const INGREDIENTS_PRICE = {salad: 150, cheese: 250, bacon: 800, meat: 1500};
const INGREDIENTS_NAMES = {bacon: "Bacon", cheese: "Cheese", meat: "Meat", salad: "Salad"};

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            cheese: 0,
            bacon: 0,
            meat: 0,
        },

        totalPrice: 0,
        purchasing: false,
        confirmOrder: false
    };

    // componentDidMount = () => {
        
    // };

    continueOrder = () => {

        const params = [];

        for(let orts in this.state.ingredients) {
            params.push(orts + "=" + this.state.ingredients[orts]);
        }

        params.push("dun=" + this.state.totalPrice);

        this.props.history.push({
            pathname: "/ship",
            search: params.join("&")
        });

        this.closeConfirmModal();
    };

    showConfirmModal = () => {
        this.setState({ confirmOrder: true });
    }

    closeConfirmModal = () => {
        this.setState({ confirmOrder: false });
    }

    ortsNemeh = (type) => {
        console.log(type);
        const newPrice = this.state.totalPrice + INGREDIENTS_PRICE[type];
        const newIngredients = {...this.state.ingredients};
        newIngredients[type]++;
        this.setState({purchasing:true, totalPrice: newPrice, ingredients: newIngredients});
    }

    ortsHasah = (type) => {
        if (this.state.ingredients[type] > 0) {
            console.log(type);
            const newPrice = this.state.totalPrice - INGREDIENTS_PRICE[type];
            const newIngredients = {...this.state.ingredients};
            newIngredients[type]--;
            this.setState({purchasing: newPrice > 1000, totalPrice: newPrice, ingredients: newIngredients});
        }
    }

    render() {
        const disabledIngredients = {...this.state.ingredients}

        for (let key in disabledIngredients) {
            disabledIngredients[key] = disabledIngredients[key] <= 0;
        }

        return (
            <div>
                <Modal closeConfirmModal={this.closeConfirmModal} show={this.state.confirmOrder}>
                    {this.state.loading ? ( <Spinner /> ) : ( 
                        <OrderSummary onCancel={this.closeConfirmModal} onContinue={this.continueOrder} price={this.state.totalPrice} ingredientNames={INGREDIENTS_NAMES} ingredients={this.state.ingredients}/>
                     )}
                </Modal>
                <Burger orts={this.state.ingredients}/>
                <BuildControls showConfirmModal={this.showConfirmModal} ingredientNames={INGREDIENTS_NAMES} disabledPurchase={!this.state.purchasing} price={this.state.totalPrice} disabledIngredients={disabledIngredients} ortsHasah={this.ortsHasah} ortsNemeh={this.ortsNemeh} />
            </div>
        )
    }
}

export default BurgerBuilder;