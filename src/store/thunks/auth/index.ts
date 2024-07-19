import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  ILoginData,
  IPublicUser,
  IRegisterData,
} from "../../../common/types/auth";
import { instance, instanceAuth } from "../../../utils/axios";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (data: ILoginData, { rejectWithValue }) => {
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
  async (data: IRegisterData, { rejectWithValue }) => {
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

export const getPublicUser = createAsyncThunk(
  "auth/get-public-user-info",
  async (_, { rejectWithValue }) => {
    try {
      const user = await instanceAuth.get("auth/get-public-user-info");
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

export const updateUserInfo = createAsyncThunk(
  "users/update",
  async (data: IPublicUser, { rejectWithValue }) => {
    try {
      const user = await instanceAuth.patch("users", data);
      console.log(user.data);

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
