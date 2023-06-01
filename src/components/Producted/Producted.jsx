import React from 'react';
import './Producted.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Producted = (props) => {
    const {img, name, seller, price, ratings} = props.product;
    const handleAddToCart = props.handleAddToCart;
 

    return (
        <div className='producted'>
             <img src={img} alt="" />    
            <div className='producted-info'>
                <h6>Name:{name}</h6>
                <p className='price'>Price: {seller} </p> 
                <p className='seller'>Seller: {price}</p>
                <p className='rating'>Rating:{ratings} star </p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} 
             className='addToCart'>Add to cart  
                <FontAwesomeIcon icon={faShoppingCart} />
             </button>
        </div>
    );
};

export default Producted;