import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProfile = createAsyncThunk("login", async ({ token }) => {
  const response = await axios.post('http://localhost:3001/api/v1/user/profile', {}, {
    headers: {
        'Authorization': 'Bearer ' + token,
        'Content-Type': 'application/json'
    }
  });
  const payload = response.data.body;
  return payload;
});