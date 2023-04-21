import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { ILoginForm } from '../../interfaces/auth'
import { useMutation } from '@apollo/client'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTE_PATHS } from '../../constants/routePaths'
import LOGIN from '../../graphql/mutations/login'
import { useAuth } from '../useAuth'
import { formatGraphqlCodeError } from '../../utils/utils'

export const useLoginForm = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { loginUser } = useAuth()

  const {
    register,
    clearErrors,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginForm>()
  const [login, { data, loading, error }] = useMutation(LOGIN)
  const state = location.state as { from: Location } | undefined

  useEffect(() => {
    if (data) {
      loginUser(data.login.userId, data.login.token)
      navigate(state?.from ?? ROUTE_PATHS.ROOT, { replace: true })
      navigate(0)
    }
  }, [data])

  const onSubmit = handleSubmit((formData: ILoginForm) => {
    login({
      variables: {
        email: formData.email,
        password: formData.password,
      },
    })
  })

  return {
    register,
    onSubmit,
    errors,
    clearErrors,
    handleSubmit,
    loading,
    formattedError: formatGraphqlCodeError(error),
  }
}
