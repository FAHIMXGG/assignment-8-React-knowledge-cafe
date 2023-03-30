import React, { useEffect, useState } from 'react';
import './Card.css'
const Card = () => {

    const [blog, setBlog] = useState([])

    useEffect(()=>{
        fetch('blogdata.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])

    return (
        <div>
            <div className='shop-container'>
            <div className="product-container">
                {
                
                }
                
            </div>
            <div className="cart-container">
                
            </div>
        </div>
        </div>
    );
};

export default Card;