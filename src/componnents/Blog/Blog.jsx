import React from 'react';
import './Blog.css'

const Blog = (props) => {
     //console.log(props.blog);
    const {author_name, blog_title, cover_img, hash_tag, pro_images, publish_date, read_time} = props.blog;
    const handleAddToTime = props.handleAddToTime;
   

    return (
        <div>
            <div>
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
                    <div>
                        <p>{read_time} min read</p>
                    </div>
                </div>
                <h2>{blog_title}</h2>
                <p>{hash_tag}</p>
                <button onClick = {() => handleAddToTime(props.blog)}>Mark as Read</button>
            </div>
            <hr />
        </div>
    );
};

export default Blog;