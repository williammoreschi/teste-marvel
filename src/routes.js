import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import Search from './pages/Seach';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Main} key={document.location.href}  />
      <Route path="/search" render={(props) => <Search {...props} /> } key={document.location.href} />
    </Switch>
  );
}
