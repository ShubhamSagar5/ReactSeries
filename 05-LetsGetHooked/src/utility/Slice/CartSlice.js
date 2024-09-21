import { createSlice } from "@reduxjs/toolkit";



const CartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addItem:(state,action)=>{
            state.items.push(action.payload)
        },
        clearCart:(state,action)=>{
            state.items.length = 0
        },
        removeItem:(state,action)=>{
            state.items.pop()
        }
    }
})

export const {addItem,removeItem,clearCart} = CartSlice.actions
export default CartSlice.reducer