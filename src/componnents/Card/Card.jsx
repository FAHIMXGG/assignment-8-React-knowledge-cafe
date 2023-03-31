import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import Info from '../Info/Info';
import Time from '../Time/Time';
import './Card.css'
const Card = () => {

    const [blogs, setBlog] = useState([])

    const [infos, setInfo] = useState([])

    const [infosData, setInfos] = useState([])

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
    const handleAddToInfo = (blog) =>{
        //console.log(blog)
        const newInfos = [...infosData, blog]
        setInfos(newInfos);
   
    }
    //console.log(infosData);

    let arr = infosData;
    let uniqueArr = Array.from(new Set(arr));
    console.log(uniqueArr); // [1, 2, 3, 4, 5]

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
                    handleAddToInfo = {handleAddToInfo}
                    ></Blog>)
                }
                
            </div>
            <div className="cart-container">
                <Time time = {infos}></Time>
                <Bookmarked count = {uniqueArr}></Bookmarked>
                {/* <Info title = {uniqueArr}></Info> */}
                {/* <h2>{uniqueArr.length}</h2>
                <h1>{uniqueArr[0]}</h1>
                <h1>{uniqueArr[1]}</h1> */}
                {/* <Info infos = {infos}></Info> */}

                {
                    uniqueArr.map(getInfo => <Info
                        key={getInfo}
                        title = {getInfo}
                    ></Info>)
                }
                
            </div>
        </div>
        </div>
    );
};

export default Card;