import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Index, Page1, Page2} from '../pages';
import Page3 from '../pages/Page3';
import Page4 from '../pages/Page4';
import Page5 from '../pages/Page5';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/page1" component={Page1} />
    <Route path="/page2" component={Page2} />
    <Route path="/page3" component={Page3} />
    <Route path="/page4" component={Page4} />
    <Route path="/page5" component={Page5} />
  </Switch>
);

export default Routes;
