import { Container, createStyles, fade, Grid, InputBase, Link, makeStyles, Theme, Typography } from '@material-ui/core'
import React from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete'

import SearchIcon from '@material-ui/icons/Search'
import { services } from '../../util/constants'
import { Service } from '../../model/model'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    logo: {
      height: 50,
    },
    autoComplete: {
      display: 'flex',
      width: '100%',
    },
    container: {
      height: '50',
      alignItems: 'center',
      wrap: 'nowrap',
    },
    searchGridItem: {
      justifyContent: 'center',
      paddingLeft: theme.spacing(2),
    },
  })
)

const Search = () => {
  const classes = useStyles()
  return (
    <Container className={classes.search}>
      <div className={classes.searchIcon}>
        <SearchIcon />
      </div>
      <Autocomplete
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
        className={classes.autoComplete}
        id="free-solo-demo"
        freeSolo
        options={services as Service[]}
        getOptionLabel={(option) => option.title}
        renderOption={(option) => (
          <Grid
            container
            className={classes.container}
            direction={'row'}
            component={Link}
            href={option.path}
            target="_blank"
            underline="none"
            color="inherit">
            <Grid item xs={2} className={classes.searchGridItem}>
              <img src={option.image} className={classes.logo} alt="Logo" />
            </Grid>
            <Grid item xs={8}>
              <Typography variant="body1">{option.title}</Typography>
            </Grid>
          </Grid>
        )}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...rest } = params
          return (
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              {...params.InputProps}
              {...rest}
            />
          )
        }}
      />
    </Container>
  )
}

export default Search
