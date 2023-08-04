import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Brand1 from '../../../assets/Carousel-Brand-image/brand-1.jpg';
import Brand2 from '../../../assets/Carousel-Brand-image/brand-2.png';

const BrandCarousel = () => {
  return (
    <div>
      <Carousel>
        <Carousel.Item>
          <img className="img-fluid" src={Brand1} alt="" srcset="" />
          
        </Carousel.Item>
        <Carousel.Item>
        <img className="img-fluid" src={Brand2} alt="" srcset="" />
          
        </Carousel.Item>
        
      </Carousel>
    </div>
  );
};

export default BrandCarousel;
