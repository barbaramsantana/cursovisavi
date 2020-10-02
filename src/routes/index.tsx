import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Index, SocialIsolation } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/socialisolation" component={SocialIsolation} />
  </Switch>
);

export default Routes;
