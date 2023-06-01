import React from 'react';
import './Producted.css'

const Producted = (props) => {
    const {img, name, seller, price, ratings} = props.product
    return (
        <div className='producted'>
             <img src={img} alt="" />    
            <div>
                <h6>Name:{name}</h6>
                <p>Price:{seller} </p> 
                <p>Seller: {price}</p>
                <p>Rating:{ratings} </p>
            </div>
            
        </div>
    );
};

export default Producted;