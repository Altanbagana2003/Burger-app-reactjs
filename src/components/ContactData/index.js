import React from "react";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import css from "./style.module.css";
import axios from "../../axios-orders";
import {withRouter} from "react-router-dom";

class ContactData extends React.Component {

    state = {
        name: null,
        city: null,
        street: null,
        loading: false
    };

    changeName = (e) => {
        this.setState({name: e.target.value});
    }

    changeCity = (e) => {
        this.setState({city: e.target.value});
    }

    changeStreet = (e) => {
        this.setState({street: e.target.value});
    }

    saveOrder = () => {
        const order = {
            ingredients: this.props.ingredients,
            dun: this.props.price,
            location: {
                name: this.state.name,
                city: this.state.city,
                street: this.state.street
            }
        }
        this.setState({loading: true});
        axios.post("/orders.json", order).then(response => {console.log("Success!!!")}).catch(err => {
            console.log("failed!!!" + err)
        }).finally(() => {
            this.setState({loading: false});
            this.props.history.replace("/orders");
        });
    }

    render () {
        return(
            <div className={css.ContactData}>
                Value: {this.props.price} $
                {this.state.loading ? <Spinner /> : (<div>
                    <input onChange={this.changeName} type="text" name="name" placeholder="Name" />
                    <input onChange={this.changeStreet} type="text" name="street" placeholder="Your location" />
                    <input onChange={this.changeCity} type="text" name="city" placeholder="City" />
                    <Button text="Submit" btnType="Success" clicked={this.saveOrder}/>
                </div>)}
            </div>
        )
    }
}

export default withRouter(ContactData);