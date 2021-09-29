import React from 'react'
import { Switch } from 'react-router'
import { routes_login, routes_home } from './routes'
import HomeLayoutRoute from './../layout/HomeLayout';
import LoginLayoutRoute from './../layout/LoginLayout';

const AppRouter = () => {
  return (
    <Switch>
      {routes_login.map((route, index) => <LoginLayoutRoute {...route} key={index} />)}
      {routes_home.map((route, index) => <HomeLayoutRoute {...route} key={index} />)}
    </Switch>
  )
}

export default AppRouter
