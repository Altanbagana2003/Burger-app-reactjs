import React from "react";
import { Route } from "react-router-dom";
import Burger from "../../components/Burger";
import ContactData from "../../components/ContactData";
import Button from "../../components/General/Button";
import css from "./style.module.css";

export class ShippingPage extends React.Component {

    state = {
        ingredients: {
            salad: 1,
            cheese: 1,
            bacon: 1,
            meat: 1
        },
        price: 0
    };

    componentDidMount () {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {};
        let price =  0;
        for(let param of query.entries()) {
            if(param[0] !== "dun") {
                ingredients[param[0]] = param[1];
            } else {  
                price = param[1];
            }
        }
        this.setState({ingredients, price});
    }

    cancelOrder = () => {
        this.props.history.goBack();
    }

    showContactData = () => {
        this.props.history.replace('/ship/contact');
    }

    render () {
        return(
            <div className={css.ShippingPage}>
                <p style={{fontSize: "24px"}}><strong>Value: {this.state.price}$</strong></p>
                <Burger orts={this.state.ingredients} />
                <Button clicked={this.cancelOrder} btnType="Danger" text="Cancel" />
                <Button clicked={this.showContactData} btnType="Success" text="Add information to Contact" />
                <Route path="/ship/contact">
                    <ContactData ingredients={this.state.ingredients} price={this.state.price} />
                </Route>
            </div>
        )
    }
}