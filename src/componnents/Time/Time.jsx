import React from 'react';

const Time = ({time}) => {

    let total = 0;
    for (const info of time){
        //console.log(info.read_time)
        total = total + info.read_time;
    }
    //console.log(total);
    return (
        <div>
            <h1>Spent time on read :{total} min</h1>
        </div>
    );
};

export default Time;