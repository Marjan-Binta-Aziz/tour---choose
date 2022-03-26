import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const {cart} = props;
    // console.log(props.cart);


    return (
            <div className="cart">
                <h2>You can Travel :</h2>
                {
                    cart.map(place => <p>{place.name}</p>)
                }
            </div>
    );
};

export default Cart;