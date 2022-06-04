import React from 'react';
import  Carousel from './Carousel';
import Categories from './Categories';
import Navbar from './Navbar';
import Footer from './Footer';
import { NavLink } from 'react-bootstrap';
import {Routes ,Route} from 'react-router-dom';

const Home = () => {
    return (
    <div>  
<Navbar/>
<nav class='navbar navbar-expand-lg navbar1-light bg-light  py-0'>
        <div class='container-fluid navbar-collapse'>
          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Fashion
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Woman
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Man
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Kids+Baby
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Home+Garden
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Entertainment
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Gifts
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Collectables
          </NavLink>

          <NavLink to='/categories' className='btn btn-btn-dark text-dark fs-8'>
            Sell with Browsio
          </NavLink>
        </div>
      </nav>
        <div className='container1-fluid'>
             
            <Carousel/>
            <section id="home">
                <div className="container-fluid">
                    <div className ="row justify-content-center">
                        <div className = "col-md-8 mt-6">
                        <h1 className="display-4 fw-bolder mb-3 text-center">
                               Make Yourself Happy With We5 Fashions </h1>
                            <p className="lead text-center fs-4 mb-5">
                            Ready-to-wear, clothes and other different accesories are a cross between haute couture and mass market. They are not made for individual customers, but great care is taken in each choice. 
                            </p> 
                        </div> 
                    </div>
                </div>
                

            </section>
        
            
            <Categories/>
  <Footer/>

            {/* <Products/>  */}


        </div>
        </div> 
    );
}

export default Home;
