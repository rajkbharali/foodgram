import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DISH_CAROUSEL_IMG } from "../utils/constants";
import "./BodyDishCarousel.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const BodyDishCarousel = ({ data }) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="border-b-2 mx-4">
      <h1 className="text-2xl font-bold ml-5">What's on your mind?</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((x, index) => (
            <div key={index} style={{ width: "150px" }}>
              <Link
                to={`food/${
                  x.action.link
                    .split("/")
                    .slice(-1)[0]
                    .split("=")[2]
                    .split("&")[0]
                }/${x.action.link.split("/").slice(-1)[0].split("?")[0]}`}
              >
                <img
                  className="cursor-pointer"
                  src={DISH_CAROUSEL_IMG + x.imageId}
                />
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BodyDishCarousel;
