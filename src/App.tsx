import React from 'react'
import Header from './Components/Header'
import Main from './Components/Main'

import ThemeProvider from './Components/Provider/ThemeProvider'
import { makeStyles, createStyles } from '@material-ui/core'

const useStyles = makeStyles(() =>
  createStyles({
    app: {
      textAlign: 'center',
      minHeight: '100vh',
    },
  })
)

const App = () => {
  const classes = useStyles()
  return (
    <div className={classes.app}>
      <ThemeProvider>
        <Header />
        <Main />
      </ThemeProvider>
    </div>
  )
}

export default App
