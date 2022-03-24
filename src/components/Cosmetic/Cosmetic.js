import React from 'react';
import { addToDatabage } from '../../utilities/fakedb';
import './Cosmetic.css'

const Cosmetic = (props) => {
    // console.log(props)
    const{name,price,id}=props.cosmetic2;

    

    const addToCart=(id)=>{
        console.log('item added',id);
        addToDatabage(id);
        // localStorage.setItem(id,1);
        // caile ekhane local storage take add korte pari abar utilities ero add korte pari
    }
    const addToCartWithPera =()=>addToCart(id);

    return (
        <div className='product' >
            <p><small>its has id {id}</small></p>
            <h2>Buy THIS:{name}</h2>
            <h2>Price is here:{price}</h2>
            <button onClick={addToCartWithPera} >Add to cart</button>
            {/* <button onClick={()=>addToCart(id)} >Add to cart :shortCurt</button> */}
            {/* <p>ONLY for ${name}</p> */}
        </div>
    );
};

export default Cosmetic;