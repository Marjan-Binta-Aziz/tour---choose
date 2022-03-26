import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    // console.log(props.cart);


    return (
            <div className="cart">
                <h2>Place you will go this weekend</h2>
                {
                    cart.map(place => <li>{place.name}</li>)
                }
            </div>
    );
};

export default Cart;