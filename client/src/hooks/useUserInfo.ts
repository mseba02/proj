import jwtDecode from 'jwt-decode'
import { useAuth } from './useAuth'

interface IUserInfo {
  iat?: number
  exp?: number
  userId?: number
  lastName?: string
  firstName?: string
  email?: string
}

const useUserInfo = () => {
  const token = useAuth()

  // const userInfo = token ? jwtDecode<any>(token) : undefined
  return { userInfo: 1 }
}

export default useUserInfo
