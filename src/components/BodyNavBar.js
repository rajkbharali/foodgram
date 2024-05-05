import BodyNavBarButtons from "./BodyNavBarButtons";
import SearchBar from "./SearchBar";

const BodyNavBar = ({ restList, setFilteredRestaurants }) => {
  return (
    <div className="flex justify-center m-2 py-0 z-20 sticky top-0 bg-white border-b-2">
      <ul className="flex items-center m-0">
        <li className="flex items-center p-3 list-none text-gray-400 text-lg cursor-pointer">
          <SearchBar
            restList={restList}
            setFilteredRestaurants={setFilteredRestaurants}
          />
        </li>
        <li>
          <BodyNavBarButtons />
        </li>
      </ul>
    </div>
  );
};

export default BodyNavBar;
