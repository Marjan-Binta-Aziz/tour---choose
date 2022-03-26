import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Place from '../Place/Place';
import './Choose.css'

const Choose = () => {
    const [places, setPlaces] = useState([])
    const [cart,setCart] = useState([])

    const handleOnClick = (place) => {
        const newCart = [...cart, place];
        setCart(newCart);
    }
    const removePlace = () => {
        setCart([])
    }
    const chooseRandom = (cart) => {
        const item = cart[Math.floor(Math.random() * cart.length)];
        const cartArray = [];
        cartArray.push(...cartArray, item)
        setCart(cartArray);
    }

        //fetch data
    useEffect(() => {
        fetch('places.json')
        .then(res => res.json())
        .then(data => setPlaces(data))
    },[])

    return (
        <div className='choose-container'>
        <div className="place-container">
        {
                places.map(place => <Place
                key ={place.id}
                place={place}
                handleOnClick = {handleOnClick}
                ></Place>)
            }
        </div>
        <div className="cart-container">
            <div className='cart'>
            <Cart cart={cart}></Cart>
                    <button className='button-choose' onClick={() => chooseRandom(cart)} >Choose</button>
                    <button className='button-chooseAgain' onClick={() => removePlace(cart)}>Choose Again</button>
                </div>
        </div>
        <div className='question-ans'>
            <h2>How React Works?</h2>
            <p>React is a declarative, efficient, and flexible JavaScript library. its use for building user interfaces. The declarative view makes our code more acceptable and easier to debug. A React application is made of multiple components &  is responsible for rendering a small, reusable piece of HTML. React have own compiler which is named bable.</p>
            <h2>Props vs state</h2>
            <table>
                <tr>
                    <th>props</th>
                    <th>state</th>
                </tr>
                <tr>
                    <td>props are read-only</td>
                    <td>state changes can be asynchronous </td>
                </tr>
                <tr>
                    <td>props can not modified</td>
                    <td>state  can be modified </td>
                </tr>
                </table>
        </div>
    </div>
    );
};

export default Choose;