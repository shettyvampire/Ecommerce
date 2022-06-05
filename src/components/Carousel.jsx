import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Imageslider = () => {
  return (
    <div className="container-fluid">
    <div className='fit carousel-fade width=100% '>
      <Carousel fluid>
        <Carousel.Item active>
          <img src='https://source.unsplash.com/1850x300/?clothes' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://source.unsplash.com/1850x300/?footwear' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://source.unsplash.com/1850x300/?gadgets' alt='' />
        </Carousel.Item>
      </Carousel>
      {/* <br /> */}
    </div>
    </div>
  );
};

export default Imageslider;
