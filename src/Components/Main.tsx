import { Container, createStyles, makeStyles } from '@material-ui/core'
import React from 'react'
import Routes from './Routes/Routes'

const useStyles = makeStyles((theme) =>
  createStyles({
    container: {
      maxWidth: 'inherit',
    },
    main: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: theme.spacing(12),
      paddingBottom: theme.spacing(1),
      paddingLeft: theme.spacing(30),
    },
    circularProgress: {
      color: theme.palette.primary.dark,
      textAlign: 'center',
    },
  })
)

const Main = () => {
  const classes = useStyles()

  return (
    <Container className={classes.container}>
      <main className={classes.main}>
        <Routes />
      </main>
    </Container>
  )
}

export default Main
