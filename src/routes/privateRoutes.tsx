import React from 'react'
import { useAppSelector } from '../hooks/hooks'
import { Navigate } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

export const PrivateRoutes: React.FC<Props> = ({ children }) => {
  const isAuthenticated = useAppSelector((state) => state.user.isAuthenticated)
  return isAuthenticated ? children : <Navigate to={'/login'} />
}
