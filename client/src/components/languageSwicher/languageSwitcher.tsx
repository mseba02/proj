import React from 'react'
import i18n from 'i18next'
import { withTranslation } from 'react-i18next'
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from '@mui/material'

const LanguageSwitcher = () => {
  const handleChange = (event: SelectChangeEvent) => {
    i18n.changeLanguage(event.target.value)
  }

  return (
    <>
      <select onChange={(e: any) => handleChange(e)}>
        <option value="ro">Ro</option>
        <option value="en">En</option>
      </select>
    </>
  )
}

export default withTranslation()(LanguageSwitcher)
