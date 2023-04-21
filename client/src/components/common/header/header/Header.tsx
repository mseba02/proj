import React, { FC } from 'react'
import Navigation from '../navigation/Navigation'
import LoggedNavigation from '../navigation/loggedNavigation'
import LanguageSwitcher from '../../../languageSwicher/languageSwitcher'
import Logo from '../Logo'
import headerStyles from './header.styles'
import { Container, Grid } from '@mui/material'
import { useAuth } from '../../../../hooks/useAuth'

const Header: FC = () => {
  const { token } = useAuth()
  const styles = headerStyles()

  return (
    <header className={styles.section}>
      <Container disableGutters={true}>
        <Grid container spacing={2} className={styles.container}>
          <Grid item xs={6}>
            <Logo />
          </Grid>
          <Grid item container xs={6} className={styles.menu}>
            {token ? <LoggedNavigation /> : <Navigation />}
            <LanguageSwitcher />
          </Grid>
        </Grid>
      </Container>
    </header>
  )
}

export default Header
