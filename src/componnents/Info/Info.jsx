import React from 'react';

import './Info.css'


const Info = ({title}) => {
    //console.log(title)
    

    return (
        <div className='info'>
            {/* <h3>Bookmarked Blogs : {title.length}</h3>

            <div className='info-title'>
                <p>{title[0]}</p>
            </div>
            <div className='info-title'>
                <p>{title[1]}</p>
            </div>
            <div className='info-title'>
                <p>{title[2]}</p>
            </div>
            <div className='info-title'>
                <p>{title[3]}</p>
            </div> */}

            
            <div className='info-title'>
                <p>{title}</p>
            </div>


            {/* <h1>puk u </h1> */}
            {/* {
                infos.map(info => <Data
                key = {info.author_name}
                info = {info}
                
                ></Data>)
            } */}
            {/* <p>{title[0]}</p>
            <p>{title[1]}</p>
            <p>{title[2]}</p>
            <p>{title[3]}</p> */}
            
        </div>
    );
};

export default Info;