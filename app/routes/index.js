import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from '../screens/app';
import Index from '../screens/index';
import GetStarted from '../screens/get-started';

export default () => (
    <Route component={ App }>
        <IndexRoute component={ Index } />
        <Route path="/start/" component={ GetStarted } />
    </Route>
);
