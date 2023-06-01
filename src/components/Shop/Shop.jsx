import React, { useEffect, useState } from 'react';
import './Shop.css'
import Producted from '../Producted/Producted';

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] =useState([])
    useEffect(()=>{
        fetch('package.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[]);

    const handleAddToCart =(product) =>{
       const newCart = [...cart, product];
       setCart(newCart)

    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Producted
                    key={product.id}
                    product={product}
                    handleAddToCart={handleAddToCart}
                    ></Producted>)
                }
            </div>
            <div className="cart-container">
                <h2>Order summary</h2>
                <p>Selected Items: ${cart.length}</p>
                <p>Total Price: $ {cart}</p>
                <p>Total Shipping Charge: </p>
                <p>Tax: $</p>
            </div>
            
        </div>
    );
};

export default Shop;