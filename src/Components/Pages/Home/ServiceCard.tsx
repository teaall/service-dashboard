import React from 'react'
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import { CardActionArea, Container } from '@material-ui/core'
import { Service } from '../../../model/model'

interface ServiceCardProps {
  service: Service
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 500,
    },
    logo: {
      width: '100%',
      height: '100%',
      objectfit: 'cover',
    },
    paper: {
      height: 200,
      width: 200,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      '&:hover': {
        //background: '#EDEDED',
        //boxShadow: '0 16px 70px -12.125px rgba(0,0,0,0.3)',
      },
    },
    actionArea: {
      height: '100%',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
    },
  })
)

const ServiceCard = ({ service }: ServiceCardProps) => {
  const classes = useStyles()

  return (
    <Card className={classes.paper}>
      <CardActionArea href={service.path} target="_blank" className={classes.actionArea}>
        <Container>
          <img src={service.image} className={classes.logo} alt="Logo" />
        </Container>
      </CardActionArea>
    </Card>
  )
}

export default ServiceCard
