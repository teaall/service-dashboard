import React, { FC } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from '../Pages/Home'

const Routes: FC = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
    </Switch>
  )
}

export default Routes
