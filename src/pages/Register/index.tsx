import React from "react"
import "./style.css"
import { Form } from "../../components"
import { useRegisterMutation } from "../../redux/authApi"
import { useNavigate } from "react-router-dom"
import { LoginData, RegisterData } from "../../interfaces/userInterface"

export const Register = () => {
  const [register, { isLoading, error }] = useRegisterMutation()
  const navigate = useNavigate()

  const handleSubmit = async (body: RegisterData) => {
    try {
      const { message } = await register(body).unwrap()

      if (message === "success") {
        navigate("/login")
      }
    } catch (error: any) {
      console.error(error?.data?.message)
    }
  }

  return (
    <div className="register">
      <div className="register__left">
        <img src="" alt="" />
      </div>
      <div className="register__right">
        <Form
          error={error as {data : {error: string}}}
          isLoading={isLoading}
          callback={handleSubmit as (body: LoginData | RegisterData) => Promise<void>}
          title="Register"
          btnText="Sign up"
        />
      </div>
    </div>
  )
}
