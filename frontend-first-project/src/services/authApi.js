import { Apis } from "./api";

// injecting endpoints related to login, reset forget

export const authApi = Apis.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (body) => ({
        url: "/login",
        method: "POST", // POST because we are sending users credentials
        body: body,
      }),
      invalidatesTags: ["User"], 
    }),

    createUser: builder.mutation({
      query: (body) => ({
        url: "/signup",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["User"],
    }),

    resetPassword: builder.mutation({
      query: (body) => ({
        url: "/resetPassword",
        method: "PUT",
        body: body,
      }),
      invalidatesTags: ["User"],
    }),

    // changePassword: builder.mutation({}),

    forgetPassword: builder.mutation({
      query: (body) => ({
        url: "/forgetPassword",
        method: "POST",
        body: body,
      }),
    }),
    overrideExisting: false,
  }),
});

export const {
  useLoginMutation,
  useCreateUserMutation,
  useResetPasswordMutation,
  useForgetPasswordMutation,
} = authApi;
