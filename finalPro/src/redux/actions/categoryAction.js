import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../../api";

export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async (_, { rejectWithValue }) => {
    try {
      const res = await instance.get("/categories?populate=*");
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
export const getOneCategory = createAsyncThunk(
  "category/getOneCategory",
  async (id, { rejectWithValue }) => {
    try {

      const res = await instance.get(`/products?populate=*&[filters][categories][id][$eq]=${id}`);
      return res.data;
    } catch (error) {
      rejectWithValue(error);
    }
  }

);

//FilterObj

export const getProductsByCategoryId = createAsyncThunk(
  "categories/getProductsByCategoryId",
  async (
     {
      id,
      page,
      rating,
      color,
      price,
      type,
      sort
    },
    thunkApi
  ) => {
    try {
      const res = await instance.get(
        `/products?populate=*&[filters][categories][id][$eq]=${
          id
        }&[filters][rating][$gte]=${rating ? "4" : ""}${
          color && `&[filters][color][$eq]=${color}`
        }${type && `&[filters][type][$eq]=${type}`}${
          price[0] && `&[filters][price][$gte]=${price[0]}`
        }${
          price[1] && `&[filters][price][$lte]=${price[1]}`
        }${sort && `&sort=price:${sort}`}&pagination[page]=${page}&pagination[pageSize]=12`
      );
      return res.data;
    } catch (error) {
      console.log(error);
      thunkApi.rejectWithValue(error);
    }
  }
)