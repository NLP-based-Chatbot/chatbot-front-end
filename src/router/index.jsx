import React from 'react'
import { Switch } from 'react-router'
import routes from './routes'
import HomeLayoutRoute from './../layout/HomeLayout';
import Login from './../views/login/index';
import LoginLayoutRoute from './../layout/LoginLayout';
import Register from './../views/register/index';

const AppRouter = () => {
  return (
    <Switch>
      <LoginLayoutRoute exact path="/" component={Login} />
      <LoginLayoutRoute path="/register" component={Register} />
      {routes.map((route, index) => <HomeLayoutRoute {...route} key={`${index}`} />)}
    </Switch>
  )
}

export default AppRouter
