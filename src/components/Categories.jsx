import React from "react";
// import CategoriesMain from "./CategoriesMain";
import Product from "./Product";
// import Navbar from './Navbar';
// import Footer from './Footer';
import { Carousel, CarouselItem } from "react-bootstrap";


import { NavLink } from "react-router-dom";
// import We_Footer from './We_footer';

const Categories = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className='d-grid gap-2 col-6 mx-auto'>
        <hr />
        <NavLink
          to='/product'
          type='button'
          className='btn btn-success fs-4'
        >
          Categories
        </NavLink>
        <center>
          <b>
            <i>Click Here To Explore We5 Fashions</i>
          </b>
        </center>
        <hr />
      </div>
      <div class='container-md col-md-10 col-lg-6 col-xl-7 d-flex align-items-center  '>
       
       <NavLink to = "/products"> <figure>
          <img
            src='/asset/woman1.jpg'
            className='img-fluid container-fluid justify-content-center'
            alt='Sample_image'
          />
          <figcaption >Woman</figcaption>
        </figure>
        </NavLink>
        <figure>
          <img
            src='/asset/man.jpg'
            class='img-fluid container-fluid justify-content-center'
            alt='Sample_image'
          />{" "}
          <figcaption>Man</figcaption>
        </figure>
        <figure>
          <img
            src='/asset/kids.jpg'
            class='img-fluid container-fluid justify-content-center'
            alt='Sample_image'
          />{" "}
          <figcaption>Kids</figcaption>
        </figure>
        <figure>
          <img
            src='/asset/garden.jpg'
            class='img-fluid container-fluid'
            alt='Sample_image'
          />{" "}
          <figcaption>Home+Garden</figcaption>
        </figure>
        <figure>
          <img
            src='/asset/gifts.jpg'
            class='img-fluid container-fluid'
            alt='Sample_image'
          />
          <figcaption>Gifts</figcaption>
        </figure>
      </div>
      <br />
      {/* <Footer/> */}

      <div>
      <div className='fit carousel-fade  '>
      <Carousel fluid>
        <Carousel.Item active>
          <img src='https://source.unsplash.com/1850x300/?furnitures' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://source.unsplash.com/1850x300/?books' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://source.unsplash.com/1850x300/?sports' alt='' />
        </Carousel.Item>
      </Carousel>
      {/* <br /> */}
    </div>
      </div>
    </div>
    
  );
};

export default Categories;
