import React from "react";
import { useEffect, useState } from "react";

const SearchBar = ({ restList, setFilteredRestaurants }) => {
  const [searchValue, setSearchValue] = useState("");
  // console.log(restList);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  useEffect(() => {
    const filterRes = restList.filter((x) =>
      x.info.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredRestaurants(filterRes);
  }, [searchValue]);
  return (
    <div className="mx-auto max-w-md">
      <form className="relative mx-auto w-max">
        <input
          type="search"
          //jest getByTestId can be accessed by providing the following parameter :
          data-testid="searchInput"
          placeholder="Search..."
          value={searchValue}
          onChange={handleChange}
          className="peer cursor-pointer text-sm relative z-10 h-10 w-12 rounded-full border bg-transparent pl-10 outline-none focus:w-full focus:cursor-text focus:border-gray-400 focus:pl-10 focus:pr-4 transition-all ease-linear duration-400"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="absolute inset-y-0 my-auto h-8 w-12 border border-transparent stroke-gray-500 px-3.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </form>
    </div>
  );
};

export default SearchBar;
