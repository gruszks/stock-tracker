import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import loadable from '@loadable/component';

import { GlobalStyle } from './app.styles';
import SiteHeader from './components/site-header';

const Companies = loadable(() => import('./views/companies'));
const AddNewCompany = loadable(() => import('./views/add-new-company'));
const NoMatch = loadable(() => import('./views/no-match'));

const App = () => (
  <>
    <GlobalStyle />
    <Router>
      <SiteHeader />
      <Switch>
        <Redirect from="/" to="/companies/" exact />
        <Route path="/companies/add/" component={AddNewCompany} />
        <Route path="/companies/" component={Companies} />
        <Route component={NoMatch} />
      </Switch>
    </Router>
  </>
);

export default App;
