import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { Deal } from "../interfaces/dealsInterface"

export const dealsApi = createApi({
  reducerPath: "deals",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/api/deals",
  }),

  endpoints: builder => ({
    getDeals: builder.query<Array<Deal>, string>({
      query: token => ({
        url: "/",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
    }),
  }),
})

export const { useGetDealsQuery } = dealsApi
