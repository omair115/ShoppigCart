import React, { Component } from 'react';

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
                          X{item.count}
                          <button className="btn btn-danger" onClick={(e)=>this.handleRemoveFromCart(e,item)}>X</button>
                        </li>
                        )}
                </ul>
                </div>
                }
            </div>
        );
    }
}

export default Basket;