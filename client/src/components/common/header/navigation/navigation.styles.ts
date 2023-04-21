import { Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'

type NavigationClasses = 'list'

const navigationStyles = makeStyles<Theme, object, NavigationClasses>(
  () => ({
    list: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
  { name: 'navigation' },
)

export default navigationStyles
