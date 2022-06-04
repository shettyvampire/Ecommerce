import React from 'react';
import { Button } from 'bootstrap';
import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
// import Navbar1 from './Navbar1';
import Footer from './Footer';
// import { NavLink } from 'react-bootstrap';

import {Routes ,Route} from 'react-router-dom';
// import { Navbar } from 'react-bootstrap';


const CategoriesMain = () => {
    return (
        <div>
  <Navbar/>
  <div>
  <nav class='navbar navbar-expand-lg navbar-light bg-light py-0'>
        <div class='container-fluid navbar-collapse'>
          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Fashion
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Woman
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Man
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Kids+Baby
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Home+Garden
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Entertainment
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Gifts
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Collectables
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark fs-8'>
            Sell with We5 Fashions
          </NavLink>
        </div>
      </nav>
      </div>

  <Footer/>

        </div>
    );
}

export default CategoriesMain;
