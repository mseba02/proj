import { Link, Navigate, useLocation } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { ROUTE_PATHS } from '../../constants/routePaths'
import React from 'react'
import LoginForm from '../../components/common/forms/loginForm/loginForm'
import { Box } from '@mui/material'

const LoginPage = () => {
  const location = useLocation()
  const state = location.state as { from: Location } | undefined
  const { token } = useAuth()

  if (token) {
    return <Navigate to={state?.from ?? ROUTE_PATHS.ROOT} replace />
  }
  return (
    <>
      <LoginForm />
      <Box>
        New to Happy Paws? <Link to={ROUTE_PATHS.REGISTER}>Register</Link>
      </Box>
    </>
  )
}

export default LoginPage
