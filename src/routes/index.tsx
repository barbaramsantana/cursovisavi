import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Index, Page1, Page2, Page3, Page4, Page5, QuemSomos, Sobre} from '../pages';


const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Index} />
    <Route path="/se" exact component={Index} />
    <Route path="/se/page1" component={Page1} />
    <Route path="/se/page2" component={Page2} />
    <Route path="/se/page3" component={Page3} />
    <Route path="/se/page4" component={Page4} />
    <Route path="/se/page5" component={Page5} />
    <Route path="/se/sobre" component={Sobre} />
    <Route path="/se/quemsomos" component={QuemSomos}/>
  </Switch>
);

export default Routes;
