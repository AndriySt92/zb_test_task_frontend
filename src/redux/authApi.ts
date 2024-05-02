import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { LoginData, LoginResponse, RegisterData} from "../interfaces/userInterface";

export const authApi = createApi({
  reducerPath: "auth",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/auth",
  }),
  endpoints: builder => ({
    register: builder.mutation<
      { message: string },
      RegisterData
    >({
      query: body => ({
        url: "/register",
        method: "POST",
        body,
      }),
    }),
    login: builder.mutation<
    LoginResponse,
    LoginData
  >({
      query: body => ({
        url: "/login",
        method: "POST",
        body,
      }),
    }),
    current: builder.query<LoginResponse, void>({
      query: () => ({
        url: "/current",
        method: "GET",
      }),
    }),
  }),
})

export const { useRegisterMutation, useLoginMutation } = authApi
