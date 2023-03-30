import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Card.css'
const Card = () => {

    const [blogs, setBlog] = useState([])

    useEffect(()=>{
        fetch('blogdata.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    return (
        <div>
            <div className='shop-container'>
            <div className="product-container">
                {/* <h1>{blogs.length}</h1> */}

                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    ></Blog>)
                }
                
            </div>
            <div className="cart-container">
                
            </div>
        </div>
        </div>
    );
};

export default Card;