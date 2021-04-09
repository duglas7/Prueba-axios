import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom'
import Usuario from './components/Usuario';
import Usuarios from './components/Usuarios';

function App() {
  return (
    <Router>
      <Link to="/">Usuarios</Link>
      <Switch>
        <Route exact path="/">
          <Usuarios />
        </Route>
        <Route path="/usuario/:id">
          <Usuario />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
