import React, { Component } from 'react';
import utils from '../../Components/Products/util'
class Basket extends Component {
    render() {
        const {cartItems} = this.props
        return (
            <div className="alert alert-info">
                {cartItems.length===0? "Basket is empty" : <div>you have {cartItems.length} products in Basket</div> }
                {cartItems.length>0 &&
                <div>
                 <ul>
                    {cartItems.map(item =>
                        <li>
                          <b>{item.title}</b>
                          X{item.count} = {item.price * item.count} 
                          <button className="btn btn-danger" onClick={(e)=>this.props.handleRemoveFromCart(e,item)}>X</button>
                        </li>
                        )}
                </ul>
                Total : {utils.formatCurrency(cartItems.reduce((a,c) => a + c.price *c.count ,0))}
                </div>
                }
            </div>
        );
    }
}

export default Basket;