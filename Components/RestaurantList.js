import { IMAGEURL } from "../config";

const RestaurantCard = ({id,name,cloudinaryImageId,cuisines,avgRating,locality}) =>{
    return(
        <div className="card">
            <img src={IMAGEURL + cloudinaryImageId} alt="restauratDish" />
            <h3>{name}</h3>
            <h3 className="cuisines">{cuisines.join(",")}</h3>
            <h4>{avgRating}</h4>
            <h4>{locality}</h4>
        </div>
    )
}
export default RestaurantCard;