import React from 'react';
import {add}from '../../utilities/calculate';
// import add from '../../utilities/calculate';

const Cosmatics = () => {
    
   
    const first=55;
    const second=66;
    // const total =add();
    const total=add(first,second);
   
    return (
        <div>
            <h2>Hi mamura tomra ki javana</h2>
            <p>total :{total}</p>
        </div>
    );
};

export default Cosmatics;