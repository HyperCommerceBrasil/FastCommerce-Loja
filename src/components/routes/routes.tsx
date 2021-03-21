import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Home, SignUp, DetailedProduct, ProductSearch } from '../../pages';

const Routes: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/signup" component={SignUp} />
      <Route path="/product:id" component={DetailedProduct} />
      <Route path="/search:query" component={ProductSearch} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
