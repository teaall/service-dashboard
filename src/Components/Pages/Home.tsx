import { createStyles, makeStyles, Theme } from '@material-ui/core'
import React from 'react'
import CustomAccordion from './Home/CustomAccordion'
import { categories } from '../../util/constants'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    anchor: {
      position: 'relative',
      top: theme.spacing(-10),
      dplay: 'block',
    },
  })
)

const Home = () => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      {categories.map((category) => (
        <>
          <div id={category.title} className={classes.anchor}></div>
          <CustomAccordion heading={category.title} />
        </>
      ))}
    </div>
  )
}

export default Home
