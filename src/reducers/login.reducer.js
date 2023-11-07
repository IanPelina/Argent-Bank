import { createSlice } from "@reduxjs/toolkit";
import { login } from "../actions/login.action";

const initialState = {
  isLoggedIn: false,  
  token: localStorage.getItem('token'),
  loading: false,
  error: null,
};

const slice = createSlice({
  name: "token",
  initialState,
  reducers: {
    reset: (state, action) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.loading = true;
      state.error = null;
      state.token = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.isLoggedIn = true;
      localStorage.setItem('token', action.payload.token);
      state.token = action.payload.token;
    });
    builder.addCase(login.rejected, (state, action) => {
      console.error(action.error.message);
      state.loading = false;
      state.error = "Le mot de passe ou l'email est incorrect.";
    });
  }
});

export const { reset } = slice.actions;
export default slice.reducer;