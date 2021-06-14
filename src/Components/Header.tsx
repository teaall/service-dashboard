import React from 'react'
import { createStyles, makeStyles, Theme, fade } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import IconButton from '@material-ui/core/IconButton'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import { useThemeContext } from './Provider/ThemeProvider'
import SearchIcon from '@material-ui/icons/Search'
import { Container, InputBase } from '@material-ui/core'
import Nav from './Nav'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    menuButton: {
      marginRight: theme.spacing(2),
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    logo: {
      maxWidth: 210,
    },
    search: {
      position: 'relative',
      marginLeft: theme.spacing(6),
      marginRight: theme.spacing(6),
      paddingRight: theme.spacing(1),
      paddingLeft: theme.spacing(1),
      borderRadius: theme.shape.borderRadius,
      backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      display: 'flex',
    },
    searchIcon: {
      padding: theme.spacing(0, 2),
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  })
)

const Header = () => {
  const classes = useStyles()
  const { theme, setTheme } = useThemeContext()

  let icon =
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
          <Container className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </Container>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu"></IconButton>
          <IconButton onClick={handleThemeFabClick}>
            {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
          </IconButton>
        </Toolbar>
      </AppBar>
      <Nav></Nav>
    </>
  )
}

export default Header
