import React from "react"
import { Button } from "../Button"
import "./style.css"
import { useForm } from "react-hook-form"
import { LoginData, RegisterData } from "../../interfaces/userInterface"

interface Props {
  callback: (body: LoginData | RegisterData) => Promise<void>
  btnText: string
  title: string
  error?: {data : {error: string}}
  isLoading?: boolean
}

export const Form: React.FC<Props> = ({
  callback,
  btnText,
  title,
  error,
  isLoading,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterData>({
    mode: "onChange",
    reValidateMode: "onBlur",
  })

  const onSubmit = (data: LoginData | RegisterData) => {
    callback(data)
  }

  return (
    <form action="" className="form" onSubmit={handleSubmit(onSubmit)}>
      <h4 className="form__title">{title}</h4>

      {title === "Register" && (
        <>
          <label htmlFor="">Name</label>
          <input
            className={`${errors.name ? "input__error" : ""} form__input`}
            type="text"
            placeholder="Name"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name length must be at least 3 characters",
              },
              maxLength: {
                value: 100,
                message: "Name length must be no more than 100 characters",
              },
            })}
          />
        </>
      )}

      <label htmlFor="">Email</label>
      <input
        className={`${errors.email ? "input__error" : ""} form__input`}
        type="text"
        placeholder="Email"
        {...register("email", {
          required: "Email address is required",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Invalid email address",
          },
        })}
      />

      <label htmlFor="">Password</label>
      <input
        className={`${errors.password ? "input__error" : ""} form__input`}
        type="password"
        placeholder="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password length must be at least 6 characters",
          },
          maxLength: {
            value: 50,
            message: "Password length must be no more than 50 characters",
          },
        })}
      />

      {title === "Login" ? (
        <p className="form__forgot">Forgot password?</p>
      ) : (
        ""
      )}

      {errors.password && (
        <span className="form__error">{errors.password.message}</span>
      )}
      {errors.email && (
        <span className="form__error">{errors.email.message}</span>
      )}
      {errors.name && (
        <span className="form__error">{errors.name.message}</span>
      )}
      {error && (
        <span className="form__error">
          {error.data && error.data.error ? error.data.error : "Occured some error"}
        </span>
      )}

      <Button
        disabled={Object.keys(errors).length > 0 || isLoading}
        style={{ width: "100%", marginTop: "20px" }}
        withBackground
      >
        {btnText}
      </Button>
    </form>
  )
}
