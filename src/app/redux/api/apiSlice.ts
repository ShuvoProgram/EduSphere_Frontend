import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userLoggedIn } from "./auth/authSlice";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://learnify-backend-three.vercel.app/api/v1",
    credentials: "include",
  }),
  tagTypes: [
    "user",
    "layout",
    "users",
    "courses",
    "user-courses",
    "course-details",
    "notifications",
    "course-anallytics",
    "orders-anallytics",
    "users-anallytics",
  ],
  endpoints: (builder) => ({
    refreshToken: builder.query({
      query: (data) => ({
        url: "/users/refresh",
        method: "GET",
        credentials: "include",
      }),
    }),
    loadUser: builder.query({
      query: () => ({
        url: "/users/me",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["user"],
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;

          dispatch(userLoggedIn({ user: result.data.data }));
        } catch (error) {}
      },
    }),
  }),
});

export const { useRefreshTokenQuery, useLoadUserQuery } = api;
