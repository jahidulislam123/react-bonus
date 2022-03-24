// use local storage to store or manage  cart
const addToDatabage =(id)=>{
    // let shoppingCart={};
    let shoppingCart={};
    //get the shopping cart
    const storedCart=localStorage.getItem('shopping-cart');
    if(storedCart){
        // console.log(storedCart);
        shoppingCart=JSON.parse(storedCart);

    }
    else{
        shoppingCart={};

    }


    // add quantity
        const quantity=shoppingCart[id];
    // const quantity =localStorage.getItem(id);
    if(quantity){
        const newQuantity=parseInt( quantity)+1;
        shoppingCart[id]=newQuantity;
        // console.log('already exist');
        // const newQuantity=parseInt( quantity)+1;
        // localStorage.setItem(id,newQuantity);
    }
    else{

        shoppingCart[id]=1;
        // console.log("new item");
        // localStorage.setItem(id,1);

    }
    localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

  
}

const RemoveFromDB=(id)=>{
    // console.log("inside fake db",id);
    const storedCart =localStorage.getItem('shopping-cart');
    if(storedCart){
        const shoppingCart=JSON.parse(storedCart);
        if(id in shoppingCart){
            // console.log('exist in teh cart');
            delete shoppingCart[id];
            localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));


        }
    }

}

// const deleteShoppingCart=()=>{
//     localStorage.setItem('shopping-cart',JSON.stringify(shoppingCart));

// }

// const number =[2,34,5,5,3,34,55];
// const sumReducer = (previous,current)=>previous+current;
// const total=number.reduce(sumReducer,0)


// const items =[
//     {id:1,name:'alta',price:100},
//     {id:1,name:'alta',price:100},
//     {id:1,name:'alta',price:100},
//     {id:1,name:'alta',price:100},
//     {id:1,name:'alta',price:100},
// ];
// const itemSumReducer =(previous,current)=>previous+current.price;
// const total=items.reduce.(itemSumReducer,0);


// const getTotalPrice =products =>{
//     const reducer =(previous,current)=>previous+current.price;
//     const total =products.reduce(reducer,0);
//     return total;
// }


//etake evabe export korte pari getTotalPrice as getToral

export{addToDatabage,RemoveFromDB};

