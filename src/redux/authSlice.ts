import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { LoginResponse, User } from '../interfaces/userInterface'

interface InitialState {
  user: User | null
  isAuthenticated: boolean
  token: string | null
}

const initialState: InitialState = {
  user: null,
  isAuthenticated: false,
  token: null,
}

const slice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<LoginResponse>) => {
      state.user = { name: action.payload.name, email: action.payload.name }
      state.isAuthenticated = true
      state.token = action.payload.token
    },
    logout: () => initialState,
  },
})

export const { logout, setUser } = slice.actions

export default slice.reducer
