import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGEURL } from "../config.js";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant.js";
import { addItems } from "../utils/cartSlices.js";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const [restaurant, restaurantMenu] = useRestaurant(id);
  const dispatch = useDispatch();
  const handleAddItems = (item) => {
    dispatch(addItems(item));
  };

  return Object.keys(restaurant).length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="restaurant-menu">
        <div>
          <img
            src={IMAGEURL + restaurant?.cloudinaryImageId}
            alt="restraunt poster"
          />
          <h1>{restaurant?.name}</h1>
          <h2>
            {restaurant?.areaName},{restaurant?.city}
          </h2>
          <h2>
            {restaurant?.avgRating} ({restaurant?.totalRatingsString})
          </h2>
          <h2>{restaurant?.cuisines?.join(",")}</h2>
        </div>
        <div>
          {restaurantMenu?.map((items, i) => {
            return (
              <div key={items?.card?.info?.id}>
                <h2>{items?.card?.info?.name}</h2>
                <button onClick={()=>handleAddItems(items?.card?.info)}>Add</button>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
