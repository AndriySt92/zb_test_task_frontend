import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginResponse, User } from '../interfaces/userInterface'
import { authApi } from './authApi'

interface InitialState {
  user: User | null
  isAuthenticated: boolean
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginResponse>) => {
      state.user = { name: action.payload.name, email: action.payload.name }
      state.isAuthenticated = true
    },
    logout: () => initialState,
  },
  extraReducers: builder => {
    builder
      .addMatcher(
        authApi.endpoints.login.matchFulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.isAuthenticated = true
          state.user = { name: action.payload.name, email: action.payload.name }
        },
      )
      .addMatcher(
        authApi.endpoints.current.matchFulfilled,
        (state, action: PayloadAction<LoginResponse>) => {
          state.isAuthenticated = true
          state.user = { name: action.payload.name, email: action.payload.name }
        },
      )
  },
})

export const { logout, setUser } = slice.actions

export default slice.reducer
