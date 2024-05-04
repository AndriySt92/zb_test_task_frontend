import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import {
  LoginData,
  LoginResponse,
  RegisterData,
} from "../interfaces/userInterface"

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zb-test-task-backend.vercel.app/api/auth",
  }),
  endpoints: builder => ({
    register: builder.mutation<{ message: string }, RegisterData>({
      query: body => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<LoginResponse, LoginData>({
      query: body => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    current: builder.query<LoginResponse, string>({
      query: token => ({
        url: "/current",
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation, useCurrentQuery } =
  authApi
