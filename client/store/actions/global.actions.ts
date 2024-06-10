import { createAsyncThunk } from "@reduxjs/toolkit";
import { setUserToken } from "@/service/useAuthHandler";
import { baseApi } from "@/store/api/baseApi";

export const loginByToken = createAsyncThunk(
  'member/loginToken',
  async ({ token }: { token: string }, { dispatch }) => {
    setUserToken(token);
    dispatch(baseApi.util.resetApiState());
  }
);
