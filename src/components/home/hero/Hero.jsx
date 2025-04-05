import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";

const Hero = () => {
  const heroImages = [
    "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000",
    "https://www.inmantec.edu/wp-content/uploads/2012/05/Lab.jpg",
    "https://i.pinimg.com/736x/f9/64/87/f96487b284c1bbd26f621ed49fb504d2.jpg",
    "https://cdn.pixabay.com/photo/2025/03/16/14/25/college-student-9474015_1280.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: true,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };

  return (
    <section className="hero">
      <Slider {...sliderSettings}>
        {heroImages.map((img, i) => (
          <div key={i}>
            <img src={img} alt={`slide-${i}`} className="hero-slide-image" />
          </div>
        ))}
      </Slider>

      <div className="line-indicator">
        {heroImages.map((_, index) => (
          <div
            key={index}
            className={`line-segment ${index === currentSlide ? "active" : ""}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
