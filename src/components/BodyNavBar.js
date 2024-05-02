import { useEffect, useState } from "react";

const BodyNavBar = ({ restList, setFilteredRestaurants }) => {
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
    <div className="flex justify-between m-2 py-0 z-20 sticky top-0 bg-white">
      <ul className="flex items-center m-0">
        <li className="flex items-center p-3 list-none text-gray-400 text-lg cursor-pointer">
          <div className="mx-auto max-w-md">
            <form className="relative mx-auto w-max">
              <input
                type="search"
                //jest getByTestId can be accessed by providing the following parameter :
                data-testid="searchInput"
                placeholder="Search..."
                value={searchValue}
                onChange={handleChange}
                className="peer cursor-pointer relative z-10 h-10 w-12 rounded-xl border bg-transparent pl-12 outline-none focus:w-full focus:cursor-text focus:border-gray-400 focus:pl-16 focus:pr-4 transition-all ease-linear duration-400"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-y-0 my-auto h-8 w-12 border-r border-transparent stroke-gray-400 px-3.5 peer-focus:border-gray-600 peer-focus:stroke-gray-400"
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
        </li>
      </ul>
    </div>
  );
};

export default BodyNavBar;
