import React from "react";
import CategoriesMain from "./CategoriesMain";
// import Navbar from './Navbar';
// import Footer from './Footer';

import { NavLink } from "react-router-dom";
// import We_Footer from './We_footer';

const Categories = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <div className='d-grid gap-2 col-6 mx-auto'>
        <hr />
        <NavLink
          to='/categoriesMain'
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
      {/* <Footer/> */}
    </div>
  );
};

export default Categories;
