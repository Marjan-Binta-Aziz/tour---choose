import React from 'react';
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Place.css'
const Place = (props) => {
    const {name, img ,price} = props.place;
    const {handleOnClick, place} = props;

    return (
            <div className='place'>
            <img src={img} alt="" />
            <p className='place-name'>{name}</p>
            <div className='place-info'>
                <p><b>Visiting Cost: $ {price}</b> </p>
            </div>
            
            <button onClick={()=> handleOnClick(place)} className='btn-cart'>
                <p className='text-cart'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Place;