import React from 'react';

import Navbar from './Navbar';
import Footer from './Footer';
import Payments from './Payments';


const Cart = () => {
    return (
        <div>
            <Navbar/>
        <div>

        <NavLink to="/payments" type="button" className="btn btn-success fs-4">Checkout</NavLink>

        </div>
        <Footer/>
        </div>
    );
}

export default Cart;

