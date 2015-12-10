import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Main from './main';
import Index from './index'
import GetStarted from './getstarted';

export default () => (
    <Route component={ Main }>
        <IndexRoute component={ Index } />
        <Route path="/start" component={ GetStarted } />
    </Route>
);
