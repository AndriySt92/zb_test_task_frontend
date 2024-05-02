import type { Action, ThunkAction } from "@reduxjs/toolkit"
import { configureStore } from "@reduxjs/toolkit"
import { authApi } from "./authApi"
import { dealsApi } from "./dealsApi"
import userReducer from "./authSlice"

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [dealsApi.reducerPath]: dealsApi.reducer,
    user: userReducer,
  },
  middleware: getDefaultMiddlware =>
    getDefaultMiddlware().concat(authApi.middleware, dealsApi.middleware),
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ThunkReturnType = void> = ThunkAction<
  ThunkReturnType,
  RootState,
  unknown,
  Action
>
