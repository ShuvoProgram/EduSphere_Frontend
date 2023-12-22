import { api } from "../apiSlice";

const orderApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrders: builder.query({
      query: () => ({
        url: `/orders/get-all-orders`,
        method: "GET",
        credentials: "include",
      }),
    }),

    createPaymentIntent: builder.mutation({
      query: (amount) => ({
        url: "/orders/payment",
        method: "POST",
        body: { amount },
        credentials: "include",
      }),
      invalidatesTags: ["layout"],
    }),
    getStripePublishableKey: builder.query({
      query: () => ({
        url: "/orders/payment/stripe-key",
        method: "GET",
        credentials: "include",
      }),
    }),
    createOrder: builder.mutation({
      query: (data) => ({
        url: "/orders/create-order",
        method: "POST",
        body: data,
        credentials: "include",
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useGetStripePublishableKeyQuery,
  useCreatePaymentIntentMutation,
  useGetAllOrdersQuery,
  useCreateOrderMutation,
} = orderApi;
