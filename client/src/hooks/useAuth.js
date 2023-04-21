import { useState, useCallback, useEffect } from 'react'
import jwtDecode from 'jwt-decode'

export const useAuth = () => {
  const [token, setToken] = useState(false)
  const [tokenExpirationDate, setTokenExpirationDate] = useState()
  const [userId, setUserId] = useState(false)

  const loginUser = useCallback((uid, token) => {
    setToken(token)
    setUserId(uid)

    const jwt = jwtDecode(token)
    const jwtExpiry = jwt.exp - jwt.iat
    const tokenExpirationDate = new Date(
      new Date().getTime() + 1000 * jwtExpiry,
    )
    setTokenExpirationDate(tokenExpirationDate)

    localStorage.setItem(
      'userData',
      JSON.stringify({
        userId: uid,
        token: token,
        expiration: tokenExpirationDate.toISOString(),
      }),
    )
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setTokenExpirationDate(null)
    setUserId(null)
    localStorage.removeItem('userData')
  }, [])

  useEffect(() => {
    if (token && tokenExpirationDate) {
      const remainingTime = tokenExpirationDate.getTime() - new Date().getTime()
      setTimeout(logout, remainingTime)
    } else {
      clearTimeout()
    }
  }, [token, logout, tokenExpirationDate])

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem('userData'))
    if (storedData && storedData.token) {
      loginUser(
        storedData.userId,
        storedData.token,
        new Date(storedData.expiration),
      )
    }
  }, [loginUser])

  return { token, loginUser, logout, userId }
}
