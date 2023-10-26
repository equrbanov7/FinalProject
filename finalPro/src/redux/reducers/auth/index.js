import { createSlice } from "@reduxjs/toolkit";
import { fetchAuthRegister,fetchAuthLogin } from "./authThunk";
const initialState = {
  token: "",
  userDatas: {},
  error: "",
  status: "nothing",
};

export const authReducer = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {

    //Registerr
    builder.addCase(fetchAuthRegister.pending, (state) => {
      state.status = "pending";
    });
    builder.addCase(fetchAuthRegister.fulfilled, (state, action) => {
      state.status = "success";
      //Api cavab
    //   state.userDatas= action.payload.user;
    //   state.token=action.payload.jwt
     console.log(action.payload)

      // console.log(action.payload,"buildercard")
    });

    builder.addCase(fetchAuthRegister.rejected, (state, action) => {
      state.status = "error";
      state.error= action.payload
      //Api cavab error
      console.log(action.payload);
    });

    // Loginn

    builder.addCase(fetchAuthLogin.pending, (state) => {
        state.status = "pending";
      });
      builder.addCase(fetchAuthLogin.fulfilled, (state, action) => {
        state.status = "success";
        //Api cavab
        state.userDatas= action.payload.user;
        state.token=action.payload.jwt
       console.log(action.payload,"logonJsttt" )
  
        // console.log(action.payload,"buildercard")
      });
  
      builder.addCase(fetchAuthLogin.rejected, (state, action) => {
        state.status = "error";
        state.error= action.payload
        state.token=""
        //Api cavab error
        console.log(action.payload);
      });
  },
});

export default authReducer.reducer;
