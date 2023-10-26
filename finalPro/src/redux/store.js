import { configureStore } from "@reduxjs/toolkit";
import { categoryReducer } from "./reducers/categoryReducer";
import { productReducer } from "./reducers/productReducer";
import { cardReducer } from "./reducers/cardReducer";
import { searchReducer } from "./reducers/searchReducer";

import {AuthReducer} from "./reducers/index"

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web



 
const persistConfig = {
  key: 'root',
  storage,
}
   
const persistedReducer = persistReducer(persistConfig, cardReducer)
const persistedAuthReducer = persistReducer(persistConfig, AuthReducer)
 

export const store = configureStore({
  reducer: {
    categories: categoryReducer,
    products: productReducer, 
    selectedProducts: persistedReducer,
    searching: searchReducer,
    auth:persistedAuthReducer
    // Place it inside the reducer object
  }
});

export const persistor = persistStore(store);