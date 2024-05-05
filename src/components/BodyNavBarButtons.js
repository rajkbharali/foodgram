import React from "react";

const BodyNavBarButtons = () => {
  const buttonArr = [
    "Sort By",
    "Fast Delivery",
    "New On Swiggy",
    "Ratings 4.0+",
    "Pure Veg",
    "Offers",
    "Rs. 300-Rs. 600",
    "Less than Rs. 300",
  ];
  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      {buttonArr.map((x, index) => (
        <button
          key={index}
          className="m-2 py-2 px-3 text-sm font-sans border rounded-full"
        >
          {x}
        </button>
      ))}
    </div>
  );
};

export default BodyNavBarButtons;
