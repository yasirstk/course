import React from 'react';

const Cart = (props) => {
    const cart = props.cart; 
    const totalPrice = cart.reduce((sum, cart) => sum + cart.price,0);


    return (

        <div className = "card bg-info sticky-top" >
            <h3>Order Summery</h3>
            <h4>Course purchased: {cart.length} </h4>
            <h5>Total : {totalPrice}</h5>
        </div>
    );
};

export default Cart;