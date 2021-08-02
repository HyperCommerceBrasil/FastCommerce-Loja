import React, { useContext } from 'react';
import { Route, RouteProps } from 'react-router-dom';
import { GlobalUserContext } from '../contexts';
import { Page404 } from '../pages';

const PrivateRoute: React.FC<RouteProps> = routeProps => {
  const { user } = useContext(GlobalUserContext);

  return user ? <Route {...routeProps} /> : <Route component={Page404} />;
};

export default PrivateRoute;
