import { useDispatch, useSelector } from "react-redux";
import { removeItems } from "../utils/cartSlices";

const Cart = () =>{

const cartItems = useSelector(store=>store.cart.items);
const dispatch = useDispatch();
const removeSelectedItem = (item) => {
    console.log('inside function')
  dispatch(removeItems(item));
};

    return(
        <>
        <h1>Cart Component</h1>
        <div>
        {cartItems.map((dish)=><div key={dish?.id}><h3>{dish?.name}</h3> <button onClick={()=>removeSelectedItem(dish.name)}>Remove</button> </div>)}
        </div>
        </>
    )
}

export default Cart;