import React from "react";
import Slider from "react-slick";

function SampleArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, backgroundColor: "#eee", display: "block", borderRadius: "50%"}}
        onClick={onClick}
      />
    );
  }

export default function Carousel({banners}) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleArrow />,
        prevArrow: <SampleArrow />
    };
    return (
    <div className="mx-5 lg:mx-24 m-5">
        <Slider {...settings}>
            <div className="w-full bg-slate-400 rounded-xl overflow-hidden">
                <img src={banners.banner1} />
            </div>
            <div className="w-full bg-slate-400 rounded-xl overflow-hidden">
                <img src={banners.banner2} />
            </div>
        </Slider>
    </div>
    );
}
