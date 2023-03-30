import React from 'react';
import Data from './Data/Data';

const Info = ({infos}) => {
    //console.log(infos)
    

    return (
        <div>
            <p>Bookmarked Blogs :{infos.length}</p>
            <h1>puk u </h1>
            {/* {
                infos.map(info => <Data
                key = {info.author_name}
                info = {info}
                
                ></Data>)
            } */}
            
        </div>
    );
};

export default Info;