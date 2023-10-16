import { createSlice } from "@reduxjs/toolkit";
import {getSelectedProducts} from "../actions/cardAction";

const initialState = {
    loading: false,
    productIds: [],
    selectedProducts:{}
    
  };
  
  
  export const selectedProductCard = createSlice({
    name: "selectedproducts",
    initialState,
    reducers: {
        // no ACTION_TYPES, this will internally create a type "user/addItem" that you will never use by hand. You will only see it in the devTools
        addItem(state, action) {
          // you can use mutable logic in createSlice reducers
          state.productIds.push(action.payload)
          console.log(action.payload, "reducerrr")
        }
      },
  
    extraReducers: (builder) => {
      //getCategories
      builder.addCase(getSelectedProducts.pending, (state) => {
        state.loading = true;
      });
      builder.addCase(getSelectedProducts.fulfilled, (state, action) => {
        state.loading = false;
        //Api cavab
       state.selectedProducts=action.payload
         // console.log(action.payload,"buildercard")
      });
    
      builder.addCase(getSelectedProducts.rejected, (state, action) => {
        state.loading = false;
        //Api cavab error
        console.log(action.payload);
      });
  
     
    },
  });
  export const { addItem } = selectedProductCard.actions;
  export const cardReducer  = selectedProductCard.reducer;