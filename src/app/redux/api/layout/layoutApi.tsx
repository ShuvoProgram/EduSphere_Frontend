import { api } from "../apiSlice";

const layoutApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getHeroData: builder.query({
      query: (type) => ({
        url: `/layout/get-layout/${type}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["layout"],
    }),
    editBanner: builder.mutation({
      query: (data) => ({
        url: "/layout/update-banner",
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["layout"],
    }),
    editLayout: builder.mutation({
      query: (data) => ({
        url: "/layout/edit-layout",
        method: "PATCH",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["layout"],
    }),
  }),
});

export const {
  useGetHeroDataQuery,
  useEditBannerMutation,
  useEditLayoutMutation,
} = layoutApi;
