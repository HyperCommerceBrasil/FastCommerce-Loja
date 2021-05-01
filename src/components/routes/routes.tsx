import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import {
  Home,
  SignUp,
  DetailedProduct,
  ProductSearchContainer,
} from '../../pages';

const What = () => (
  <div
    style={{
      display: 'flex',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    }}
  >
    <h1>404</h1>
  </div>
);

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/product/:id" component={DetailedProduct} />
      <Route path="/search" component={ProductSearchContainer} />
      <Route component={What} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
