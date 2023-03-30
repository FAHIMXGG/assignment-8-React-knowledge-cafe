import React from 'react';
import './Time.css'
const Time = ({time}) => {

    let total = 0;
    for (const info of time){
        //console.log(info.read_time)
        total = total + info.read_time;
    }
    //console.log(total);
    return (
        <div className='time'>
            <h3>Spent time on read :{total} min</h3>
        </div>
    );
};

export default Time;