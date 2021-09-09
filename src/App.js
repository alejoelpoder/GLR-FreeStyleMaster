import React from 'react';
import Normalize from 'react-normalize';
import HeaderContainer from './components/HeaderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import FSM from './components/FSM';

function App() {
  return (
    <>
      <Normalize />
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HeaderContainer />
          </Route>
          <Route path="/FSM/:pais?"> {/*El ? es para que el parámetro sea opcional*/}
            <FSM />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
