import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const Apis = createApi({
  reducerPath: "api", // Use a valid reducer path
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:4000/api/v1", // Correct usage of baseQuery

    prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("Authorization", `Bearer ${token}`); // Usually, the token should be set as a Bearer token
      }
      return headers;
    },

  }),
  endpoints: () => ({}),
  tagTypes: [],


});
