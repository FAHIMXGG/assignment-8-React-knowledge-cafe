import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmarked from '../Bookmarked/Bookmarked';
import Info from '../Info/Info';
import Time from '../Time/Time';
import './Card.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Card = () => {

    const [blogs, setBlog] = useState([])

    const [infos, setInfo] = useState([])

    const [infosData, setInfos] = useState([])
    //data fetch
    useEffect(()=>{
        fetch('blogdata.json')
        .then(res => res.json())
        .then(data => setBlog(data))
    },[])


    //time add
    const handleAddToTime = (blog) =>{
        //console.log(blog)
        const newInfo = [...infos, blog]
        setInfo(newInfo);
    }
    // bookmark
    const handleAddToInfo = (blog) =>{
        //console.log(blog)
        const newInfos = [...infosData, blog]
        setInfos(newInfos);
        //notify();
        // console.log(newInfos)
        
        const mySet = new Set(newInfos);

        const updatedSet = new Set(mySet);
        //console.log(updatedSet);
        if (updatedSet.size !== newInfos.length) {
            console.log("Duplicate element(s) found");
            notify();
          }
          else{
            notify2()
          }
   
    }
    //toast
    const notify = () =>{
        toast("You Have Already Bookmarked This Blog")
    }
    const notify2 = () =>{
        toast("Bookmarked")
    }
    //console.log(infosData);

    //uniqueArr for bookmark info
    let arr = infosData;
    let uniqueArr = Array.from(new Set(arr));
    
  
    //console.log(test);



    //console.log(uniqueArr); // [1, 2, 3, 4, 5]

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