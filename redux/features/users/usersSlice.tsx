/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface IUser {
  user: {
    email: string | null;
  };
  isLoading: boolean;
}

const initialState: IUser = {
  user: {
    email: null,
  },
  isLoading: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<string | null>) => {
      state.user.email = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUser, setLoading } = userSlice.actions;

export default userSlice.reducer;
