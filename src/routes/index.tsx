import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Index, Page1, Page2 } from '../pages';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
  </Switch>
);

export default Routes;
