import RestaurantCard from "./RestaurantList";
import { restaurantData } from "../config";
import { useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useRestaurantList from "../utils/useRestaurantList";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurants, allRestaurantList] = useRestaurantList();
  const isOnline = useOnline();
  const {user,setNewUser} = useContext(UserContext)

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
        <input type="text"  value={user.name} onChange={(e)=>setNewUser({name:e.target.value,email:"random mail"})}/>
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
