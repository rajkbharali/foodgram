import React, { useEffect, useState } from "react";

const BodyNavBarButtons = ({
  restList,
  setFilteredRestaurants,
  removeFilter,
  setRemoveFilter,
}) => {
  const [searchCategory, setSearchCategory] = useState(null);

  const buttonArr = [
    {
      filterTag: "Fast Delivery",
      logic: "x?.info?.sla?.deliveryTime < 25",
    },
    {
      filterTag: "Pure Veg",
      logic: "x?.info?.veg",
    },
    {
      filterTag: "Ratings 4.0+",
      logic: "x?.info?.avgRating > 4",
    },
    {
      filterTag: "Rs. 300-Rs. 600",
      logic:
        "parseInt(x?.info?.costForTwo.split(' ')[0].substring(1)) > 300 && parseInt(x?.info?.costForTwo.split(' ')[0].substring(1)) < 600",
    },
    {
      filterTag: "Less than Rs. 300",
      logic: "parseInt(x?.info?.costForTwo.split(' ')[0].substring(1)) < 300",
    },
    // ,
    // ,
  ];

  useEffect(() => {
    if (searchCategory !== null) {
      const filterRes = restList?.filter((x) => eval(searchCategory));
      console.log(filterRes);
      setFilteredRestaurants(filterRes);
      setRemoveFilter(true);
    } else {
      setFilteredRestaurants(restList);
    }
  }, [searchCategory]);

  const handleSearchCategory = (searchObj) => {
    setSearchCategory(searchObj.logic);
  };

  const handleRemoveFilter = () => {
    setSearchCategory(null);
    setRemoveFilter(false);
  };

  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      {buttonArr.map((x, index) => (
        <button
          key={index}
          className="m-2 py-2 px-3 text-sm font-sans border-2 rounded-full flex items-center"
          onClick={() => {
            handleSearchCategory(x);
          }}
        >
          {x.filterTag}
        </button>
      ))}
      {removeFilter ? (
        <button
          className="m-2 py-2 px-3 text-sm text-red-600 font-sans border-2 border-red-600 rounded-full flex items-center"
          onClick={handleRemoveFilter}
        >
          Remove filters
        </button>
      ) : (
        ""
      )}
    </div>
  );
};

export default BodyNavBarButtons;
