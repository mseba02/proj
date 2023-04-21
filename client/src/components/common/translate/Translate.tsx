import React, { FC } from 'react'
import { useTranslation } from 'react-i18next'

const Translation: FC<React.PropsWithChildren<{ i18nKey: string }>> = ({
  i18nKey,
}) => {
  const { t } = useTranslation()

  return <span>{t(i18nKey)}</span>
}

export default Translation
