import {createSlice} from "@reduxjs/toolkit";

const cartSlices = createSlice({
 name:'cart',
 initialState:{
    items:[],
 },
 reducers:{
    addItems:(state,action)=>{
      state.items.push(action.payload);
    },
    clearCart:(state)=>{
        state.item = [];
    },
    removeItems:(state,action)=>{
        state.items.filter(dish=> action.payload !== dish.name);
    }
 }
});

export const { addItems,clearCart,removeItems } = cartSlices.actions;
export default cartSlices.reducer;

