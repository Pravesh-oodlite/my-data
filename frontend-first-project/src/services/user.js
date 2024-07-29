import { Apis } from "./api";

export const userApis = Apis.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: (params) => ({
        url: "/getAllUser",
        method: "GET",
      }),
      providesTags: ["User"],
    }),

    getUser: builder.query({
      query: (params) => ({
        url: "/getUserById",
        method: "GET",
        params: params,
      }),
      providesTags: ["User"],
    }),

    deleteUser: builder.mutation({
      query: (params) => ({
        url: "/deleteUserById",
        method: "DELETE",
        params,
      }),
      invalidatesTags: ["User"],
    }),

    updateUser: builder.mutation({
      query: (body) => ({
        url: "/updateProfile",
        method: "PUT",
        body,
      }),
      invalidatesTags: ["User"],
    }),

    overrideExisting: false,
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
} = userApis;
