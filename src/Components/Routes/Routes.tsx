import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import AddApp from '../Pages/AddApp'
import Home from '../Pages/Home'

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/add_app">
        <AddApp />
      </Route>
    </Switch>
  )
}

export default Routes
