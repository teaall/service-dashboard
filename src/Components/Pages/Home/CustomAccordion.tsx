import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiAccordion from '@material-ui/core/Accordion'
import MuiAccordionSummary from '@material-ui/core/AccordionSummary'
import MuiAccordionDetails from '@material-ui/core/AccordionDetails'
import Typography from '@material-ui/core/Typography'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import { Box, createStyles, Grid, makeStyles, Theme } from '@material-ui/core'
import ServiceCard from './ServiceCard'
import { services } from '../../../util/constants'

interface CustomAccordionProps {
  heading: String
}

const Accordion = withStyles({
  root: {
    border: 'none',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none',
    },
  },
  expanded: {},
})(MuiAccordion)

const AccordionSummary = withStyles((theme) => ({
  root: {
    minHeight: 56,
    '&$expanded': {
      minHeight: 56,
    },
  },
  content: {
    '&$expanded': {
      margin: '12px 0',
    },
  },
  expanded: {},
  expandIcon: {
    order: -1,
  },
}))(MuiAccordionSummary)

const AccordionDetails = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiAccordionDetails)

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      height: 140,
      width: 100,
    },
  })
)

const CustomAccordion = ({ heading }: CustomAccordionProps) => {
  const classes = useStyles()
  return (
    <div>
      <Accordion square defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1d-content" id="panel1d-header">
          <Typography variant="h5">
            <Box fontWeight="fontWeightBold" m={1}>
              {heading}
            </Box>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Grid container spacing={5} className={classes.root}>
            {services.map((service) =>
              service.category.title === heading ? (
                <Grid key={service.title} item>
                  <ServiceCard service={service} />
                </Grid>
              ) : (
                <></>
              )
            )}
          </Grid>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default CustomAccordion
