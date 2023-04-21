import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import theme from '../../../styles/theme/theme'
import constants from '../../../styles/theme/constants'
type FooterClasses = 'footer' | 'container' | 'logo' | 'menu'

const { palette } = theme
const { FONT_SM } = constants

const footerStyles = makeStyles<Theme, object, FooterClasses>(
  () => ({
    footer: {
      background: palette.common.black,
      color: palette.common.white,
      padding: '30px 0',
      fontSize: FONT_SM,
      position: 'fixed',
      bottom: 0,
      right: 0,
      left: 0,
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo: {
      width: '100%',
    },
    menu: {
      display: 'flex',
      justifyContent: 'end',
      alignItems: 'center',
    },
  }),
  { name: 'footer' },
)

export default footerStyles
