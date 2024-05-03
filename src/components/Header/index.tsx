import React from 'react'
import './style.css'
import { Button } from '../Button'
import { logout } from '../../redux/authSlice'
import { useAppDispatch, useAppSelector } from '../../hooks/hooks'

export const Header = () => {
  const user = useAppSelector(state => state.user.user)
  const dispatch = useAppDispatch()

  const handleLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
  }

  return (
    <header className='header'>
      <div className='header__inner'>
        <div className='header__logo'>
          LOGO
        </div>
        {user ? (
          <div className='header__user'>
            <div className='header__user-name'>{user.name}</div>
            <div className='header__logout'>
              <Button onClick={handleLogout}>Logout</Button>
            </div>
          </div>
        ) : (
          <div className='header__buttons'>
            <Button linkTo="/login" withBackground={true}>
              Log in
            </Button>

            <Button linkTo="/register">
              Sign Up
            </Button>
          </div>
        )}
      </div>
    </header>
  )
}
