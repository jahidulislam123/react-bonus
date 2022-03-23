import React from 'react';

const Cosmetic = (props) => {
    // console.log(props)
    const{name,price,id}=props.cosmetic2;
    return (
        <div>
            <p><small>its has id {id}</small></p>
            <h2>Buy THIS:{name}</h2>
            <h2>Price is here:{price}</h2>
            

            {/* <p>ONLY for ${name}</p> */}
        </div>
    );
};

export default Cosmetic;