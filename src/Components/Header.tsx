import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { useThemeContext } from './Provider/ThemeProvider'
import Nav from './Nav'
import Search from './Header/Search'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
      maxWidth: 210,
    },
  })
)

const Header = () => {
  const classes = useStyles()
  const { theme, setTheme } = useThemeContext()

  const icon =
    theme === 'light' ? '/logos/dark_logo_transparent_background.png' : '/logos/white_logo_transparent_background.png'

  const handleThemeFabClick = () => {
    setTheme((prev) => {
      const newTheme = prev === 'dark' ? 'light' : 'dark'
      return newTheme
    })
  }

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <img src={icon} className={classes.logo} alt="Logo" />
          <Search />
          <IconButton onClick={handleThemeFabClick}>
            {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav />
    </>
  )
}

export default Header
