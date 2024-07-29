import { createSlice } from "@reduxjs/toolkit";

const userDetailsParsed = JSON.parse(localStorage.getItem("userDetails"));

const initialState = {
  token: null || localStorage.getItem("token"), // token is a key -> getItem("token")
  isLoggedIn: null || localStorage.getItem("isLoggedIn"),
  userDetails: null || userDetailsParsed,
};


export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    setToken: (state, action) => {
      // console.log("state-------", state, action);
      state.token = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.isLoggedIn = action.payload;
    },
    setUserDetails: (state, action) => {
      // console.log("state---of useDetails--", state, action);
      state.userDetails = action.payload;
    },
  },
});

export const { setToken, setLoggedIn, setUserDetails } = authSlice.actions;
