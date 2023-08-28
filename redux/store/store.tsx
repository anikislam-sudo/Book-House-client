import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/apiSlice";
import usersReducer from "../features/users/usersSlice";

export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
