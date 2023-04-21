import { createTheme } from '@mui/material/styles'
import constants from './constants'

const {
  COLOR_PRIMARY,
  COLOR_PRIMARY_LIGHT,
  COLOR_PRIMARY_DARK,
  COLOR_PRIMARY_CONTRATS_TEXT,
  COLOR_COMMON_WHITE,
  COLOR_COMMON_BLACK,
  COLOR_SECONDARY,
  COLOR_PRIMARY_CONTRATS_TEXT_SECONDARY,
  COLOR_PRIMARY_ERROR,
  COLOR_PRIMARY_SUCCESS,
  COLOR_PRIMARY_INFO,
} = constants

const theme = createTheme({
  palette: {
    common: {
      black: COLOR_COMMON_BLACK,
      white: COLOR_COMMON_WHITE,
    },
    primary: {
      light: COLOR_PRIMARY_LIGHT,
      main: COLOR_PRIMARY,
      dark: COLOR_PRIMARY_DARK,
      contrastText: COLOR_PRIMARY_CONTRATS_TEXT,
    },
    secondary: {
      main: COLOR_SECONDARY,
      contrastText: COLOR_PRIMARY_CONTRATS_TEXT_SECONDARY,
    },
    info: {
      main: COLOR_PRIMARY_INFO,
    },
    success: {
      main: COLOR_PRIMARY_SUCCESS,
    },
    error: {
      main: COLOR_PRIMARY_ERROR,
    },
    background: {
      default: COLOR_COMMON_WHITE,
    },
  },
  typography: {
    fontFamily: 'Roboto',
  },
})

export default theme
