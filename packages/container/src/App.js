import React, {lazy, Suspense, useState, useEffect} from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

import Header from './components/Header';
import Loading from './components/Loading';

const AuthLazy = lazy(() => import('./components/AuthAppComponent'));
const MarketingLazy = lazy(() => import('./components/MarketingAppComponent'));
const DashboardLazy = lazy(() => import('./components/DashboardAppComponent'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co-'
});

const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn)
    history.push('/dashboard');
  }, [isSignedIn])

  return (
    <StylesProvider generateClassName={generateClassName}>
      <Router history={history}>
        <div>
          <Header signedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)}/>
          <Suspense fallback={<Loading />}>
          <Switch>
            <Route path="/auth">
              <AuthLazy onSignIn={() => setIsSignedIn(true)} />
            </Route>
            <Route path="/dashboard">
              {!isSignedIn && <Redirect to="/" />}
              <DashboardLazy />
            </Route>
            <Route path="/" component={MarketingLazy} />
          </Switch>
          </Suspense>
        </div>
      </Router>
    </StylesProvider>
  )
};