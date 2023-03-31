import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './Blog.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = (props) => {
     //console.log(props.blog);
    const {author_name, blog_title, cover_img, hash_tag, pro_images, publish_date, read_time} = props.blog;
    const handleAddToTime = props.handleAddToTime;
    const handleAddToInfo = props.handleAddToInfo;

    const notify = () =>{
        toast("Bookmarked")
    }

    const handleClick = () => {
        notify();
        handleAddToInfo(blog_title);
      };

    return (
        <div>
            <div className='blog'>
                <img className='cover' src={cover_img} alt="" />
                <div className='author_container'>
                    <div className='blog_data'>
                        <div className='pro_img'>
                            <img  src={pro_images} alt="" />
                        </div>
                        <div className='author_info'>
                            <h3>{author_name}</h3>
                            <p><small>{publish_date}</small></p>
                        </div>
                    </div>
                    <div className='bookmark'>
                        <div><p>{read_time} min read</p></div>
                        <div>
                            <button className='b-btn' onClick = {handleClick} ><FontAwesomeIcon icon={faBookmark} /></button>
                            
                        </div>
                    </div>
                </div>
                <h2 className='blog-t'>{blog_title}</h2>
                <p>{hash_tag}</p>
                <button className='mark_btn' onClick = {() => handleAddToTime(props.blog)}>Mark as Read</button>
                
            </div>
            <hr className='blog-hr' />
            <ToastContainer />
        </div>
    );
};

export default Blog;