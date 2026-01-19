"use client"
import React, { useEffect } from "react";
import Slider from "react-slick";

export default function BestsellingProducts() {
  let productSlider = {
    dots: false,
    infinite: true,
    speed: 500,

 
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
     
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          
        },
      },  
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      } 
    ],
  };


  let productSliderDesk = {
    dots: true,
    infinite: true,
    speed: 500,

 
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
  };

  return (
    <section className="py-10 overflow-hidden">
      <div className="max-w-[1320px] mx-auto">

        <div  className="md:hidden block">
            <Slider {...productSlider}>
          <div>Slide1</div>
          <div>Slide2</div>
          <div>Slide3</div>
          <div>Slide4</div>
        </Slider>
        </div>
        
    <div className="md:block hidden">
        <Slider {...productSliderDesk}>
          <div>Slide1</div>
          <div>Slide2</div>
          <div>Slide3</div>
          <div>Slide4</div>
          <div>Slide5</div>
        </Slider>
    </div>
        

      </div>
    </section>
  );
}
