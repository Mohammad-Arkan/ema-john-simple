import React from 'react';
import './Producted.css'
import logo from '../../assets/react.svg'
const Producted = (props) => {
    const {img, name, seller, price, ratings} = props.product
    return (
        <div className='producted'>
             <img src={img} alt="" />    
            <div className='producted-info'>
                <h6>Name:{name}</h6>
                <p className='price'>Price:{seller} </p> 
                <p className='seller'>Seller: {price}</p>
                <p className='rating'>Rating:{ratings} star </p>
            </div>
            <button className='addToCart'>Add to cart 
            <img src={logo} alt="" />
             </button>
        </div>
    );
};

export default Producted;