import React from 'react';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
// Pages
import LoginPage from './LoginPage';

const AdminRouting = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route path={`${path}/login`} component={LoginPage} />
      <Redirect from={path} to={`${path}/login`} />
    </Switch>
  )
}

export default AdminRouting;
