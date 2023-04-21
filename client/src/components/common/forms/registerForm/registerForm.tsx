import React, { FC, useEffect, useState } from 'react'
import { useRegisterForm } from '../../../../hooks'
import { useTranslation } from 'react-i18next'
import { useNavigate } from 'react-router-dom'
import Loader from '../../loader/Loader'
import Translation from '../../translate/Translate'
import { ROUTE_PATHS } from '../../../../constants/routePaths'
import { Box } from '@mui/material'

const RegisterForm: FC = () => {
  const {
    onSubmit,
    register,
    errors,
    clearErrors,
    loading,
    status,
    formattedError,
  } = useRegisterForm()
  const { t } = useTranslation()
  const navigate = useNavigate()

  const [redirectSeconds, setRedirectSeconds] = useState<number>(5)

  useEffect(() => {
    if (status) {
      const interval = setInterval(() => {
        setRedirectSeconds(prevState => prevState - 1)
      }, 1000)
      redirectSeconds === 0 && navigate(ROUTE_PATHS.LOGIN, { replace: true })

      return () => {
        clearInterval(interval)
      }
    }
  }, [status, redirectSeconds])

  if (status) {
    return (
      <Box sx={{ color: 'green' }}>
        <Translation i18nKey="forms.register.accountcreated" />
        {redirectSeconds}
        <Translation i18nKey="seconds" />
      </Box>
    )
  }

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={onSubmit}>
        <div>
          <input
            placeholder="Email"
            {...register('email', {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
          />

          {errors.email && <Translation i18nKey="forms.emailnotvalid" />}
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            {...register('password', {
              required: true,
              minLength: 5,
            })}
          />
          {errors.password && <Translation i18nKey="forms.password" />}
        </div>

        <div>
          <input
            placeholder="First name"
            {...register('firstName', {
              required: true,
              pattern: /[A-Za-z]/i,
              minLength: 3,
            })}
          />
          {errors.firstName && (
            <Translation i18nKey="forms.register.errors.firstName" />
          )}
        </div>

        <div>
          <input
            placeholder="Last Name"
            {...register('lastName', {
              required: true,
              pattern: /[A-Za-z]/i,
              minLength: 3,
            })}
          />
          {errors.lastName && (
            <Translation i18nKey="forms.register.errors.lastName" />
          )}
        </div>
        <button type="submit" onClick={() => clearErrors()}>
          <Translation i18nKey="forms.register.submit" />
        </button>
      </form>
      <div>
        {formattedError && t(`forms.register.errors.${formattedError}`)}
      </div>
    </>
  )
}

export default RegisterForm
