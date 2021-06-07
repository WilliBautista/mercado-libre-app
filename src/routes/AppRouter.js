import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';
import { Error404Screen } from '../components/Error404Screen';
import { HomeScreen } from '../components/HomeScreen';
import { ProductScreen } from '../components/ProductScreen';
import { ResultsScreen } from '../components/ResultsScreen';

export const AppRouter = () => {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomeScreen} />
          <Route exact path="/items" component={ResultsScreen} />
          <Route exact path="/items/:id" component={ProductScreen} />
          <Route exact path="/404" component={Error404Screen} />
          <Redirect to="/404" />
        </Switch>
      </div>
    </Router>
  );
}
