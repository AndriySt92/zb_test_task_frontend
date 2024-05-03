import React from "react"
import "./style.css"
import { Form } from "../../components"
import { useLoginMutation } from "../../redux/authApi"
import { setUser } from "../../redux/authSlice"
import { LoginData } from "../../interfaces/userInterface"
import { useAppDispatch } from "../../hooks/hooks"

export const Login = () => {
  const [login, { isLoading, error }] = useLoginMutation()
  const dispatch = useAppDispatch()

  const handleSubmit = async (body: LoginData) => {
    try {
      const { token, name, email } = await login(body).unwrap()

      dispatch(setUser({ name, email, token }))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="login">
      <div className="login__left">
        <img src="" alt="" />
      </div>
      <div className="login__right">
        <Form
          error={error as {data : {error: string}}}
          isLoading={isLoading}
          callback={handleSubmit}
          title="Login"
          btnText="Sign in"
        />
      </div>
    </div>
  )
}
