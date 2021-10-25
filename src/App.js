import { lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar.jsx';
import { LoaderSpinner } from 'Components/Spinner/spinner.jsx';
import React from 'react';

const HomeView = lazy(() =>
  import('Components/Views/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);

const RegisterView = lazy(() =>
  import(
    'Components/Views/RegisterView.jsx' /* webpackChunkName: "RegisterView" */
  ),
);

const LoginView = lazy(() =>
  import('Components/Views/LoginView.jsx' /* webpackChunkName: "LoginView" */),
);

const Phonebook = lazy(() =>
  import('Components/Phonebook/Phonebook' /* webpackChunkName: "Phonebook" */),
);

const NotFoundView = lazy(() =>
  import(
    './Components/Views/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */
  ),
);

export const App = () => {
  return (
    <>
      <AppBar />

      <Suspense fallback={<LoaderSpinner />}>
        <Switch>
          <Route path="/" exact>
            <HomeView />
          </Route>

          <Route path="/register" exact>
            <RegisterView />
          </Route>

          <Route path="/login" exact>
            <LoginView />
          </Route>

          <Route path="/contacts" exact>
            <Phonebook />
          </Route>

          <Route>
            <NotFoundView />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
};
