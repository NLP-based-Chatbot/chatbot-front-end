import React from 'react'
import { Route, Switch } from 'react-router'
import routes from './routes'
import Home from './../views/home/index';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      {routes.map((route, index) => <Route {...route} key={`${index}`} />)}
    </Switch>
  )
}

export default AppRouter
