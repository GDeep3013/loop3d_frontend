import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function PartnerSlider() {
  var settings = {
    dots: false,
    arrows:false,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings}>
      <div className="building-logo-box pt-[20px] pb-[20px]">
        <img className="h-[60px] object-contain" src="/images/building-logos/01.webp" alt="Logo image" />
      </div>
      <div className="building-logo-box pt-[20px] pb-[20px]">
        <img className="h-[60px] object-contain" src="/images/building-logos/02.webp" alt="Logo image" />
      </div>
      <div className="building-logo-box pt-[20px] pb-[20px]">
        <img className="h-[60px] object-contain" src="/images/building-logos/03.webp" alt="Logo image" />
      </div>
      <div className="building-logo-box pt-[20px] pb-[20px]">
        <img className="h-[60px] object-contain" src="/images/building-logos/04.webp" alt="Logo image" />
      </div>
      <div className="building-logo-box pt-[20px] pb-[20px]">
        <img className="h-[60px] object-contain" src="/images/building-logos/05.webp" alt="Logo image" />
      </div>
      <div className="building-logo-box pt-[20px] pb-[20px]">
        <img className="h-[60px] object-contain" src="/images/building-logos/06.webp" alt="Logo image" />
      </div>
      <div className="building-logo-box pt-[20px] pb-[20px]">
        <img className="h-[60px] object-contain" src="/images/building-logos/07.webp" alt="Logo image" />
      </div>
    </Slider>
  );
}
