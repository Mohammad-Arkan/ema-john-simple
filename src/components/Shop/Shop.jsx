import React, { useEffect, useState } from 'react';
import './Shop.css'
import Producted from '../Producted/Producted';

const Shop = () => {
    const [products, setProducts] = useState([])
    useEffect(()=>{
        fetch('package.json')
        .then(res=> res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Producted
                    key={product.id}
                    product={product}
                    ></Producted>)
                }
            </div>
            <div className="cart-container">
                <h2>Order summary</h2>
            </div>
            
        </div>
    );
};

export default Shop;