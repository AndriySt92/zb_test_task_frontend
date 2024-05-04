import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Deal } from "../interfaces/dealsInterface"
import { getToken } from "../utils/getToken"

export const dealsApi = createApi({
  reducerPath: "deals",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://zb-test-task-backend.vercel.app/api/deals",
  }),

  endpoints: builder => ({
    getDeals: builder.query<Array<Deal>, void>({
      query: () => ({
        url: "/",
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }),
    }),
  }),
})

export const { useGetDealsQuery } = dealsApi
