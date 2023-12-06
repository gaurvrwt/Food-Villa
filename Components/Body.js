import RestaurantCard from "./RestaurantList";
import { restaurantData } from "../config";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, allRestaurantList] = useRestaurantList();
  const isOnline = useOnline();

  if(!isOnline){
    return(
      <h1>🔴 Please Check your Connection!</h1>
    )
  }

  return allRestaurantList?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          onClick={() => {
            const data = filterData(searchText, allRestaurantList);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurants?.map((restaurant) => {
          return (
            <Link
              to={"restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard key={restaurant.info.id} {...restaurant.info} />{" "}
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
