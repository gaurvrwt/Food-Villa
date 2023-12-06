import { useEffect,useState } from "react";

const useRestaurantList = () =>{

    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [allRestaurantList,setAllRestaurantList] = useState([]);

    useEffect(()=>{
        getRestaurantsData();
    },[]);
    
   async function getRestaurantsData(){
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5006897&lng=77.3152116&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      console.log(json);
      setFilteredRestaurants(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setAllRestaurantList(json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return [filteredRestaurants, allRestaurantList];
}

export default useRestaurantList;