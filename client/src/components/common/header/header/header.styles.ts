import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import theme from '../../../../styles/theme/theme'

type HeaderClasses = 'section' | 'container' | 'logo' | 'menu'
const { palette } = theme
const headerStyles = makeStyles<Theme, object, HeaderClasses>(
  () => ({
    section: {
      background: palette.primary.main,
    },
    container: {
      alignItems: 'center',
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
  { name: 'header' },
)

export default headerStyles
