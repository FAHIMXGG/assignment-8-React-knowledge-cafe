import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Info from '../Info/Info';
import Time from '../Time/Time';
import './Card.css'
const Card = () => {

    const [blogs, setBlog] = useState([])

    const [infos, setInfo] = useState([])

    useEffect(()=>{
        fetch('blogdata.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])

    const handleAddToTime = (blog) =>{
        //console.log(blog)
        const newInfo = [...infos, blog]
        setInfo(newInfo);
    }

    return (
        <div>
            <div className='shop-container'>
            <div className="product-container">
                {/* <h1>{blogs.length}</h1> */}

                {
                    blogs.map(blog => <Blog
                    key = {blog.id}
                    blog = {blog}
                    handleAddToTime = {handleAddToTime}
                    ></Blog>)
                }
                
            </div>
            <div className="cart-container">
                <Time time = {infos}></Time>
                {/* <Info infos = {infos}></Info> */}
                
            </div>
        </div>
        </div>
    );
};

export default Card;