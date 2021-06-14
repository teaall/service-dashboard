import {
  createMuiTheme,
  CssBaseline,
  PaletteType,
  responsiveFontSizes,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core'
import { FC, useContext, useEffect, useState } from 'react'
import React from 'react'

// import { getOrThrow } from '../../services/db'

const sharedTheme = createMuiTheme({
  overrides: {
    MuiPaper: {
      rounded: { borderRadius: 20 },
    },
    MuiLink: {
      root: {
        fontSize: '1rem',
        fontFamily: 'Ubuntu',
      },
    },
    MuiTypography: {
      h6: {
        fontFamily: 'Ubuntu',
      },
    },
    MuiDialogActions: {
      root: {
        justifyContent: 'center',
      },
    },
    MuiButton: {
      root: {
        borderRadius: 20,
      },
    },
  },
  palette: {
    primary: {
      light: '#9fbeff',
      main: '#688efe',
      dark: '#2661ca',
    },
    secondary: {
      light: '#69dff2',
      main: '#28adbf',
      dark: '#007d8f',
    },
  },
})

const lightTheme = responsiveFontSizes(
  createMuiTheme({
    ...sharedTheme,
    palette: {
      type: 'light',
    },
  })
)

const darkTheme = responsiveFontSizes(
  createMuiTheme({
    ...sharedTheme,
    palette: {
      type: 'dark',
    },
  })
)

interface ThemeContext {
  theme: PaletteType
  setTheme: React.Dispatch<React.SetStateAction<PaletteType>>
}

const Context = React.createContext<ThemeContext | null>(null)

export const useThemeContext = () => useContext(Context) as ThemeContext

const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState<PaletteType>('dark')

  useEffect(() => {
    // getOrThrow<PaletteType>('theme').then(setTheme).catch(console.error)
  }, [])

  return (
    <Context.Provider value={{ theme, setTheme }}>
      <MuiThemeProvider theme={theme === 'light' ? { ...lightTheme } : { ...darkTheme }}>
        <CssBaseline />
        {children}
      </MuiThemeProvider>
    </Context.Provider>
  )
}

export default ThemeProvider
