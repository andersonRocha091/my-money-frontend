import React from 'react';

import { Switch, Route} from 'react-router';


import Dashboard from '../dashboard/Dashboard';
// import Dashboard from '../dashboardNoRedux/DashboardNoRedux';
import BillingCycle from '../billingcycle/BillingCycle';

export default props => (
        <Switch>
            <Route path="/" component={Dashboard} exact />
            <Route path="/billingcycles" component={BillingCycle} />
        </Switch>
);
