import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/categoryReducer";
import { productReducer } from "./reducers/productReducer";
export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer, // Place it inside the reducer object
  }
});
