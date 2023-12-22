import { api } from "../apiSlice";
import { userLoggedIn, userLoggedOut, userRegistration } from "./authSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: (data) => ({
        url: "/users/registration",
        method: "POST",
        body: data,
        credentials: "include",
      }),

      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(userRegistration({ token: result.data.data.token }));
        } catch (error) {}
      },
    }),
    activation: builder.mutation({
      query: (data) => ({
        url: "/users/activate-user",
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: "/users/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["courses", "course-details", "user"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          dispatch(
            userLoggedIn({
              token: result.data.data.token,
              user: result.data.data.sanitizedUser,
            })
          );
        } catch (error) {}
      },
    }),
    socialAuth: builder.mutation({
      query: (data) => ({
        url: "/users/social-auth",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(
            userLoggedIn({
              token: result.data?.data?.accessToken,
              user: result?.data?.data?.user,
            })
          );
        } catch (error) {}
      },
    }),
    logout: builder.query({
      query: () => ({
        url: "/users/logout",
        method: "GET",
        credentials: "include",
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          dispatch(userLoggedOut());
        } catch (error) {}
      },
    }),
  }),
});

export const {
  useRegisterMutation,
  useActivationMutation,
  useLoginMutation,
  useSocialAuthMutation,
  useLogoutQuery,
  useLazyLogoutQuery,
} = authApi;
