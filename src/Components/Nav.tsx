import React from 'react'
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Toolbar from '@material-ui/core/Toolbar'
import List from '@material-ui/core/List'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import HomeIcon from '@material-ui/icons/Home'
import ListItemText from '@material-ui/core/ListItemText'
import { Box } from '@material-ui/core'
import AddBoxIcon from '@material-ui/icons/AddBox'
import { useHistory } from 'react-router-dom'
import { MenuInfomation } from '../model/model'
import { Settings } from '@material-ui/icons'

const drawerWidth = 240

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: 'auto',
    },
    nested: {
      paddingLeft: theme.spacing(10),
      borderRadius: 0,
    },
    test: {
      borderRadius: 0,
      marginBottom: theme.spacing(-3),
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`,
    },
  })
)

const menuItems: MenuInfomation[] = [
  { path: '/add_app', title: 'App hinzufügen', icon: <AddBoxIcon /> },
  { path: '/settings', title: 'Einstellungen', icon: <Settings /> },
]

const Nav = () => {
  const classes = useStyles()
  const history = useHistory()

  const handleRedirect = (route: string) => {
    history.push(route)
  }

  return (
    <div>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}>
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button onClick={() => handleRedirect('/')}>
              <ListItemIcon>
                <HomeIcon />
              </ListItemIcon>
              <ListItemText>
                <Typography>
                  <Box fontWeight="fontWeightBold" m={1}>
                    App
                  </Box>
                </Typography>
              </ListItemText>
            </ListItem>
            <Divider />

            {menuItems.map(({ path, title, icon }) => (
              <ListItem key={title} button onClick={() => handleRedirect(path)}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText>
                  <Typography>
                    <Box fontWeight="fontWeightBold" m={1}>
                      {title}
                    </Box>
                  </Typography>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
    </div>
  )
}
export default Nav
