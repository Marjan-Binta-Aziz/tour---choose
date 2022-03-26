import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Place from '../Place/Place';
import './Choose.css'

const Choose = () => {
    const [places, setPlaces] = useState([])
    const [cart,setCart] = useState([])

    const handleOnClick = (place) => {
        // console.log(place);
        const newCart = [...cart, place];
        console.log(place.name);
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
            <Cart cart={cart}></Cart>
            
            <div className='buttons'>
                    <button className='button-choose' onClick={() => chooseRandom(cart)} >Choose</button>
                    <button className='button-chooseAgain' onClick={() => removePlace(cart)}>Choose Again</button>
                </div>
        </div>
    </div>
    );
};

export default Choose;