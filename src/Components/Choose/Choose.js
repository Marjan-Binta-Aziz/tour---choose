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

        </div>
    </div>
    );
};

export default Choose;