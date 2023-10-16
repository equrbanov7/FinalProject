import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getOneCategory } from "../actions/categoryAction";

const initialState = {
  loading: false,
  categories: {},
  oneCategory: {},
};

export const categorySlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setObjFilter: (state, action) => {
      //function
      console.log(action.payload);
    },
  },

  extraReducers: (builder) => {
    //getCategories
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.loading = false;
      //Api cavab
      state.categories = action.payload;
      //  console.log(action.payload)
    });
  
    builder.addCase(getCategories.rejected, (state, action) => {
      state.loading = false;
      //Api cavab error
      console.log(action.payload);
    });

    // getOneCategory
    builder.addCase(getOneCategory.pending, (state) => {
      state.loading = true;
    });

    builder.addCase(getOneCategory.fulfilled, (state, action) => {
      state.loading = false;
      //Api cavab
      state.oneCategory = action.payload

    });
    builder.addCase(getOneCategory.rejected, (state, action) => {
      state.loading = false;
      //Api cavab error
      console.log(action.payload);
    });
  },
});

// Action creators are generated for each case reducer function
//export const {} = categoryReducer.actions

export const categoryReducer = categorySlice.reducer;
