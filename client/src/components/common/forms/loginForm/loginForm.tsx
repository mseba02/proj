import React, { FC } from 'react'
import { useLoginForm } from '../../../../hooks'
import { useTranslation } from 'react-i18next'
import Translation from '../../translate/Translate'
import Loader from '../../loader/Loader'

const LoginForm: FC = () => {
  const { t } = useTranslation()
  const { onSubmit, register, errors, clearErrors, formattedError, loading } =
    useLoginForm()

  return (
    <>
      {loading && <Loader />}
      <form onSubmit={onSubmit}>
        <input
          placeholder="Email"
          {...register('email', {
            required: true,
            pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
          })}
        />
        {errors.email && <Translation i18nKey="forms.emailnotvalid" />}

        <input
          type="password"
          placeholder="Password"
          {...register('password', {
            required: true,
          })}
        />
        {errors.password && <Translation i18nKey="forms.password" />}
        <button type="submit" onClick={() => clearErrors()}>
          <Translation i18nKey="forms.login.submit" />
        </button>
        <div>{formattedError && t(`forms.login.errors.${formattedError}`)}</div>
      </form>
    </>
  )
}

export default LoginForm
