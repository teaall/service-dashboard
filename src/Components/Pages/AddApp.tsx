import {
  Button,
  createStyles,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  makeStyles,
  Paper,
  Radio,
  RadioGroup,
  Theme,
} from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { categories } from '../../util/constants'
import ImageCard from './AddApp/ImageCard'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      paddingTop: theme.spacing(6),
    },
    paper: {
      height: 400,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spacing(2, 4),
    },
  })
)

const AddApp = () => {
  const classes = useStyles()

  const handleSubmit = () => {
    console.log('')
  }

  const reset = () => {}

  return (
    <form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
      <Paper>
        <Grid container className={classes.paper} alignItems="flex-start" spacing={2}>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="filled-basic"
              label="App Name"
              variant="filled"
              //defaultValue="e.g. Traefik"
            />
          </Grid>
          <Grid item xs={6}>
            <TextField
              fullWidth
              required
              id="filled-basic"
              label="App Url"
              variant="filled"
              //defaultValue="e.g. https://traefik.spacevulture.de"
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl component="fieldset">
              <FormLabel component="legend">Category</FormLabel>
              <RadioGroup row>
                {categories.map((category) => (
                  <FormControlLabel value={category.title} control={<Radio />} label={category.title} />
                ))}
              </RadioGroup>
            </FormControl>
          </Grid>
          <ImageCard />
          <Grid item>
            <Button type="button" variant="contained" onClick={reset}>
              Reset
            </Button>
          </Grid>
          <Grid item>
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </form>
  )
}

export default AddApp
