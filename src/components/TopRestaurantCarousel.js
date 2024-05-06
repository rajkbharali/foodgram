import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./BodyDishCarousel.css";
import { IMAGE_URL } from "../utils/constants";
import { MdStars } from "react-icons/md";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}
function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return <div className={className} onClick={onClick} />;
}

const TopRestaurantCarousel = ({ data }) => {
  const settings = {
    className: "slider variable-width",
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    variableWidth: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="border-b-2 mx-4">
      <h1 className="text-2xl font-bold ml-5 mt-5">Top restaurant chains</h1>
      <div className="slider-container">
        <Slider {...settings}>
          {data?.map((x, index) => (
            <Link key={x.info.id} to={`/restaurants/${x.info.id}`}>
              <div
                className="my-2 mx-3 scale-95 hover:scale-100 ease-in-out duration-300 cursor-pointer"
                style={{ width: "260px" }}
              >
                <div
                  className="flex items-end h-60 top-0 text-white text-lg rounded-3xl shadow-[inset_black_0_-70px_50px_-15px]"
                  style={{
                    backgroundImage: `url(${
                      IMAGE_URL + x.info.cloudinaryImageId
                    })`,
                    backgroundSize: "cover",
                  }}
                >
                  {x?.info?.aggregatedDiscountInfoV3 ? (
                    <p className="m-3">
                      {x?.info?.aggregatedDiscountInfoV3?.header +
                        " " +
                        x?.info?.aggregatedDiscountInfoV3?.subHeader}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
                <div className="mx-2">
                  <p className="text-lg whitespace-nowrap overflow-hidden">
                    <b>{x?.info?.name}</b>
                  </p>
                  <p className="flex items-center">
                    <MdStars className="mr-1 text-green-700" />{" "}
                    <b className="mr-1">{x?.info?.avgRatingString}</b> |{" "}
                    <b className="ml-1">{x?.info?.sla?.slaString}</b>
                  </p>
                  <p className="text-sm whitespace-nowrap overflow-hidden text-gray-500">
                    {x?.info?.cuisines.join(", ")}
                  </p>
                  <p className="text-sm whitespace-nowrap overflow-hidden text-gray-500">
                    {x?.info?.locality}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default TopRestaurantCarousel;
