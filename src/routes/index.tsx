import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Dashboard, Team, About } from '../pages';

import {
  Page1,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
} from '../pages/Covid';

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={Dashboard} />

    <Route path="/about" component={About} />
    <Route path="/team" component={Team} />

    <Route path="/se/page1" component={Page1} />
    <Route path="/se/page2" component={Page2} />
    <Route path="/se/page3" component={Page3} />
    <Route path="/se/page4" component={Page4} />
    <Route path="/se/page5" component={Page5} />
    <Route path="/se/page6" component={Page6} />
    <Route path="/se/page7" component={Page7} />
  </Switch>
);

export default Routes;
