import { api } from "../apiSlice";

const analyticsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCourseAnalytics: builder.query({
      query: () => ({
        url: `/analytics/get-course-analytics`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["course-anallytics"],
    }),
    getOrdersAnalytics: builder.query({
      query: () => ({
        url: `/analytics/get-order-analytics`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["orders-anallytics"],
    }),
    getUsersAnalytics: builder.query({
      query: () => ({
        url: `/analytics/get-order-analytics`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["users-anallytics"],
    }),
  }),
});

export const {
  useGetCourseAnalyticsQuery,
  useGetOrdersAnalyticsQuery,
  useGetUsersAnalyticsQuery,
} = analyticsApi;
