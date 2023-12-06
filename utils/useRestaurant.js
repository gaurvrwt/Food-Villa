import { useEffect,useState } from "react";

const useRestraunt = (id)=>{

    const [restaurant,setRestaurant] = useState({});
    const [restaurantMenu,setRestaurantMenu] = useState([]);

    useEffect(()=>{
        getRestaurantMenu();
    },[]);

   async function getRestaurantMenu(){
      const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.5006897&lng=77.3152116&restaurantId="+id);
      const json = await data.json();
      setRestaurant(json?.data?.cards[0]?.card?.card?.info);
      setRestaurantMenu(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card.itemCards);
    console.log(json);
    };

    return [restaurant,restaurantMenu];
}

export default useRestraunt;