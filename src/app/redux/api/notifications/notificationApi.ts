import { api } from "../apiSlice";

const notificationsApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllNotifications: builder.query({
      query: () => ({
        url: `/notifications`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["notifications"],
    }),
    updateNotificationStatus: builder.mutation({
      query: (id) => ({
        url: `/notifications/update-status/${id}`,
        method: "PATCH",
        credentials: "include",
      }),
      invalidatesTags: ["notifications"],
    }),
  }),
});

export const {
  useGetAllNotificationsQuery,
  useUpdateNotificationStatusMutation,
} = notificationsApi;
