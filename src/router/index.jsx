import React from 'react'
import { Route, Switch } from 'react-router'
import routes from './routes'
import HomeLayoutRoute from './../layout/HomeLayout';
import Login from './../views/login/index';
import LoginLayoutRoute from './../layout/LoginLayout';

const AppRouter = () => {
  return (
    <Switch>
      <LoginLayoutRoute exact path="/" component={Login} />
      {routes.map((route, index) => <HomeLayoutRoute {...route} key={`${index}`} />)}
    </Switch>
  )
}

export default AppRouter
