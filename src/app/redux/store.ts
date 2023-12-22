"use client";

import { configureStore } from "@reduxjs/toolkit";

import { api } from "./api/apiSlice";
import authSlice from "./api/auth/authSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: false,
});

const initializeApp = async () => {
  await store.dispatch(api.endpoints.refreshToken.initiate({}));
  await store.dispatch(api.endpoints.loadUser.initiate({}));
};

initializeApp();

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
