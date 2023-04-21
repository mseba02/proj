import React, { FC } from 'react'
import Translate from '../../components/common/translate/Translate'
const HomePage: FC = () => {
  return (
    <>
      <div className="text-center">
        <Translate i18nKey="welcome" />
      </div>
      <div></div>
    </>
  )
}

export default HomePage
