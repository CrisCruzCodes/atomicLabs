import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/home';
import Form from './pages/form';
import Terms from './terms';

function App(){
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/home" component={Home} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/terms" component={Terms} />
    </Switch>
    </BrowserRouter>

  )
}

export default App;