import React, { Component } from 'react';
import Auxilliary from '../../../hoc/Auxilliary/Auxilliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
    render() {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (<li>
                <span style={{textTransform: "capitalize)"}}>{igKey}: {this.props.ingredients[igKey]}</span>
            </li>);
        });
        return (
            <Auxilliary>
            
            <h3>Your Order</h3>
            <p>A delicious burger with the following inredients.</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to Checkout?</p>
            <Button  btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE </Button>
        </Auxilliary>
        );
    }
}

export default OrderSummary;