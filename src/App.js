import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import AppBar from './Components/AppBar/AppBar.jsx';
import { LoaderSpinner } from 'Components/Spinner/spinner.jsx';
import PrivateRoute from 'Components/PrivateRoute';
import PublicRoute from 'Components/PublicRoute';
import { authOperations, authSelectors } from 'redux/auth/';

const HomeView = lazy(() =>
  import('Components/Views/HomeView.jsx' /* webpackChunkName: "HomeView" */),
);

const Phonebook = lazy(() =>
  import('Components/Phonebook/Phonebook' /* webpackChunkName: "Phonebook" */),
);

const LoginView = lazy(() =>
  import('Components/Views/LoginView.jsx' /* webpackChunkName: "LoginView" */),
);

const RegisterView = lazy(() =>
  import(
    'Components/Views/RegisterView.jsx' /* webpackChunkName: "RegisterView" */
  ),
);

const NotFoundView = lazy(() =>
  import(
    'Components/Views/NotFoundView.jsx' /* webpackChunkName: "NotFoundView" */
  ),
);

export const App = () => {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(
    authSelectors.getIsFetchingCurrentUser,
  );

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isFetchingCurrentUser && (
      <>
        <AppBar />

        <Suspense fallback={<LoaderSpinner />}>
          <Switch>
            <PublicRoute exact path="/">
              <HomeView />
            </PublicRoute>

            <PrivateRoute exact path="/contacts" redirectTo="/login">
              <Phonebook />
            </PrivateRoute>

            <PublicRoute exact path="/register" restricted>
              <RegisterView />
            </PublicRoute>

            <PublicRoute exact path="/login" restricted redirectTo="/contacts">
              <LoginView />
            </PublicRoute>

            <PublicRoute>
              <NotFoundView />
            </PublicRoute>
          </Switch>
        </Suspense>
      </>
    )
  );
};
