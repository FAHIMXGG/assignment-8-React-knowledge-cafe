import React from 'react';
import './Bookmarked.css'

const Bookmarked = ({count}) => {
    //console.log(count.length)
    return (
        <div className='book'>
            <h3>Bookmarked Blogs :{count.length}</h3>
        </div>
    );
};

export default Bookmarked;