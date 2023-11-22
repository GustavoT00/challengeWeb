import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PublicRoute = ({ component: Component, ...rest }) => {
  const { state } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        !state.isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { state } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        state.isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

const Routes = () => {
  return (
    <Router>
      <PublicRoute path="/login" component={LoginPage} />
      <PrivateRoute path="/" exact component={HomePage} />
      <PrivateRoute path="/dashboard" component={DashboardPage} />
    </Router>
  );
};

export default Routes;