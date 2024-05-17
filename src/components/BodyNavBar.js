import BodyNavBarButtons from "./BodyNavBarButtons";
import SearchBar from "./SearchBar";

const BodyNavBar = ({ restList, setFilteredRestaurants }) => {
  return (
    <div className="flex justify-start items-center m-2 py-0 pl-10 z-20 sticky top-0 bg-white border-b-2">
      <SearchBar
        restList={restList}
        setFilteredRestaurants={setFilteredRestaurants}
      />
      {/* <BodyNavBarButtons
            restList={restList}
            setFilteredRestaurants={setFilteredRestaurants}
          /> */}
    </div>
  );
};

export default BodyNavBar;
