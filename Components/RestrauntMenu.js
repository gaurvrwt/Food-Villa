import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";
import { IMAGEURL } from "../config.js";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant.js";

const RestaurantMenu = () =>{
        const {id} = useParams();
        const [restaurant,restaurantMenu] = useRestaurant(id);
        
    return (
        Object.keys(restaurant).length === 0 ? <Shimmer /> :
        <>
        <div className="restaurant-menu">
            <div>
            <img src={IMAGEURL + restaurant?.cloudinaryImageId} alt="restraunt poster" />
            <h1>{restaurant?.name}</h1>
            <h2>{restaurant?.areaName},{restaurant?.city}</h2>
            <h2>{restaurant?.avgRating} ({restaurant?.totalRatingsString})</h2>
            <h2>{restaurant?.cuisines?.join(',')}</h2>
            </div>
            <div>
                {restaurantMenu?.map((items,i)=>{
                    return(
                   <h2 key={items?.card?.info?.id}>{items?.card?.info?.name}</h2>
                    )
                })}
            
            </div>
        </div>
        </>
    )
}

export default RestaurantMenu;