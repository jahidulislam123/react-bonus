import React, { useEffect, useState } from 'react';
import Cosmetic from '../Cosmetic/Cosmetic';
// import {add}from '../../utilities/calculate';
// // import add from '../../utilities/calculate';

const Cosmatics = () => {
    

    // const cosmetics =
        
    //     [
    //         {
    //           "id": "623b314510d804de92a4b98a",
    //           "price": 24,
    //           "name": "Waller Howard"
    //         },
    //         {
    //           "id": "623b31458972d4c53cad450e",
    //           "price": 52,
    //           "name": "Myrna Sanders"
    //         },
    //         {
    //           "id": "623b3145f755e2babb7609b9",
    //           "price": 267,
    //           "name": "Day King"
    //         },
    //         {
    //           "id": "623b314540d863a54113b4bd",
    //           "price": 68,
    //           "name": "Tucker Rollins"
    //         },
    //         {
    //           "id": "623b31459e547adfa760324b",
    //           "price": 164,
    //           "name": "Spencer Jacobson"
    //         },
    //         {
    //           "id": "623b3145c3cfefc70e06b544",
    //           "price": 365,
    //           "name": "Liza Johnson"
    //         }
    //       ]
    
   const [cosmetics,setCosmetics]=useState([]);
   useEffect(()=>{
       fetch('data.json')
       .then(res=>res.json())
       .then(data=>setCosmetics(data));
   },[])
    // const first=55;
    // const second=66;
    // const total =add();
    // const total=add(first,second);
   
    return (
        <div>
            <h2>Hi mamura tomra ki javana</h2>
            {/* <p>total :{total}</p> */}

            {
                cosmetics.map(cosmetic=> <Cosmetic key={cosmetic.id} cosmetic2={cosmetic} ></Cosmetic>)
            }
        </div>
    );
};

export default Cosmatics;