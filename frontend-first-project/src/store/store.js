import { configureStore, isRejectedWithValue } from "@reduxjs/toolkit";
import { Apis } from "../services/api";
import { authSlice } from "./authSlice";



// custom error handler

const rtkQueryErrorLogger = (api) => (next) => async (action) => {
  try {
    if (isRejectedWithValue(action)) {
      if (action.payload?.data?.msg === "Missing Authorization Header") {
        localStorage.removeItem("token");
      }
    }
  } catch (err) {
    /* empty */
  }

  return next(action);
};

// creation of store

export const store = configureStore({
  reducer: {
    [Apis.reducerPath]: Apis.reducer,
    auth:authSlice.reducer ,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(Apis.middleware).concat(rtkQueryErrorLogger),
});
