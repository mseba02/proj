import React, { FC, ReactNode } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { ROUTE_PATHS } from '../../../constants/routePaths'

interface IRequireAuth {
  children?: ReactNode
  redirectTo?: string
  token: any
}

const RequireAuth: FC<React.PropsWithChildren<IRequireAuth>> = ({
  children,
  redirectTo = ROUTE_PATHS.LOGIN,
  token,
}) => {
  const location = useLocation()
  if (!token) {
    return <Navigate state={{ from: location }} to={redirectTo} />
  }

  return <>{children}</>
}

export default RequireAuth
