import { useForm } from 'react-hook-form'
import { IRegisterForm } from '../../interfaces/auth'
import { useMutation } from '@apollo/client'
import CREATE_USER from '../../graphql/mutations/register'
import { formatGraphqlCodeError } from '../../utils/utils'

export const useRegisterForm = () => {
  const {
    register,
    clearErrors,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IRegisterForm>()
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER)

  const onSubmit = handleSubmit(
    ({ email, password, firstName, lastName }: IRegisterForm) => {
      createUser({
        variables: {
          email,
          password,
          firstName,
          lastName,
        },
      })
    },
  )

  return {
    register,
    onSubmit,
    errors,
    clearErrors,
    setValue,
    handleSubmit,
    loading,
    status: data && data.createUser?.status,
    formattedError: formatGraphqlCodeError(error),
  }
}
