import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Dashboard from '../components/dashboard/Dashboard';
import PageNotFound from '../components/common/PageNotFound';

const routes = (
  <main>
    <Switch>
      <Route path="/" component={Home} exact={true}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="*" component={PageNotFound}></Route>
    </Switch>
  </main>
);

export default routes;
