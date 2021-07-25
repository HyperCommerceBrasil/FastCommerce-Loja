import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Home,
  SignUp,
  DetailedProduct,
  ProductSearchContainer,
  Page404,
  UserArea,
  ForgotPassword,
  ResetPassword,
} from '../pages';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/product/:id" component={DetailedProduct} />
      <Route path="/search" component={ProductSearchContainer} />
      <Route path="/user/:id" component={UserArea} />
      <Route path="/forgot-password" component={ForgotPassword} />
      <Route path="/reset-password" component={ResetPassword} />
      <Route component={Page404} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
