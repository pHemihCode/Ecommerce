import { createSlice } from "@reduxjs/toolkit";


const initialState ={
    cart: []
}
export const cartSlice = createSlice({
    name:'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
            const items = state.cart.find((item) => item.id === action.payload.id);
            if(items){
                items.quantity++
            }else{
                state.cart.push({...action.payload, quantity:1})
            }
        },
        increaseQty: (state, action) => {
            const items = state.cart.find((item) => item.id === action.payload);
            items.quantity++
        },
        decreaseQty: (state, action)=>{
            const items = state.cart.find((item) => item.id === action.payload);
            if(items.quantity === 1){
                items.quantity = 1
            }else{
                items.quantity--;
            }
        },
        removeItem: (state,action) => {
            const removeItems = state.cart.filter((item) => item.id !== action.payload)
            state.cart = removeItems
        },
        clearCart: (state,action) => {
            const removeItems = state.cart.filter((item) => item.id === action.payload)
            state.cart = removeItems
        }
    }
})
export const {addtoCart, increaseQty, decreaseQty, removeItem, clearCart} = cartSlice.actions
export default cartSlice.reducer