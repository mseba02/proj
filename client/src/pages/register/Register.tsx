import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ROUTE_PATHS } from '../../constants/routePaths'
import React from 'react'
import RegisterForm from '../../components/common/forms/registerForm/registerForm'

const RegisterPage = () => {
  const location = useLocation()
  const state = location.state as { from: Location } | undefined
  const { token } = useAuth()

  if (token) {
    return <Navigate to={state?.from ?? ROUTE_PATHS.ROOT} replace />
  }

  return <RegisterForm />
}

export default RegisterPage
