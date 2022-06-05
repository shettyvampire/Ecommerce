import React from "react";
import { Carousel, CarouselItem } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

const Imageslider = () => {
  return (
    // <div className="">
    <div className=' carousel-fade '>
      <Carousel>
        <Carousel.Item active>
          <img src='https://source.unsplash.com/1400x350/?clothes' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://source.unsplash.com/1400x350/?footwear' alt='' />
        </Carousel.Item>
        <Carousel.Item>
          <img src='https://source.unsplash.com/1400x350/?gadgets' alt='' />
        </Carousel.Item>
      </Carousel>
      {/* <br /> */}
    </div>
    // </div>
  );
};

export default Imageslider;
