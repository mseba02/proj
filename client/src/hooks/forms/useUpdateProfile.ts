import { useForm } from 'react-hook-form'

export const useUpdateProfile = () => {
  const {
    register,
    setError,
    clearErrors,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm()

  const onSubmit = handleSubmit((formData: any) => {
    console.log(formData, 'updated user')
  })

  return {
    register,
    onSubmit,
    errors,
    clearErrors,
    setValue,
    handleSubmit,
  }
}
