import { useForm } from 'react-hook-form'
export const useAddNewPet = () => {
  const {
    register,
    clearErrors,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<any>({})

  const onSubmit = handleSubmit((formData: any) => {
    console.log(formData, 'ok')
  })

  return {
    register,
    onSubmit,
    control,
    errors,
    clearErrors,
    setValue,
    handleSubmit,
  }
}
