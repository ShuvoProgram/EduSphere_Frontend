import { api } from "../apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    updateAvatar: builder.mutation({
      query: (data) => ({
        url: "/users/update-avatar",
        method: "PUT",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
    updateUserInfo: builder.mutation({
      query: (data) => ({
        url: "/users/update-userinfo",
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
    updatePassword: builder.mutation({
      query: (data) => ({
        url: "/users/update-user-password",
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
    getAllUsers: builder.query({
      query: () => ({
        url: "/users/get-all-users",
        credentials: "include",
      }),
      providesTags: ["users"],
    }),
    updateRole: builder.mutation({
      query: ({ email, role }) => ({
        url: `/users/update-user-role/${email}`,
        method: "PATCH",
        body: { role },
        credentials: "include",
      }),
      invalidatesTags: ["users"],
    }),
    deleteUser: builder.mutation({
      query: (userId) => ({
        url: `/users/delete-user/${userId}`,
        method: "DELETE",
        credentials: "include",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const {
  useUpdateAvatarMutation,
  useUpdateUserInfoMutation,
  useUpdatePasswordMutation,
  useGetAllUsersQuery,
  useUpdateRoleMutation,
  useDeleteUserMutation,
} = userApi;
