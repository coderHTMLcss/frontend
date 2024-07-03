import { createAsyncThunk } from "@reduxjs/toolkit";
import { LoginData, RegisterData } from "../../../common/types/auth";
import { instance } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: LoginData, { rejectWithValue }) => {
    try {
      const user = await instance.post("auth/login", data);
      if (
        user.data.status === 400 ||
        user.data.status === 401 ||
        user.data.status === 500
      )
        return;
      sessionStorage.setItem("token", user.data.token);
      sessionStorage.setItem("name", user.data.user.firstName);
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
export const registerUser = createAsyncThunk(
  "auth/register",
  async (data: RegisterData, { rejectWithValue }) => {
    try {
      const user = await instance.post("auth/register", data);
      sessionStorage.setItem("token", user.data.token);
      sessionStorage.setItem("name", user.data.user.firstName);
      return user.data;
    } catch (error: any) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.message);
      }
    }
  }
);
