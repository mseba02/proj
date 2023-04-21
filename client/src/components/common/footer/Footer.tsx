import React, { FC } from 'react'
import Translate from '../translate/Translate'
import footerStyles from './footer.styles'

const Footer: FC = () => {
  const style = footerStyles()

  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div>
          <Translate i18nKey="footer.footerDescription" />
        </div>
        <div>
          <div>© {new Date().getFullYear()} Happy Paws</div>
        </div>
      </div>
    </div>
  )
}

export default Footer
