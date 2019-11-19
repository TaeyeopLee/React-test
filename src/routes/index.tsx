import * as React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePage from '../pages/home';
import Memo from '../pages/memo';
import Trash from '../pages/trash';

const Root: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/memo" component={Memo} />
      <Route path="/trash" component={Trash} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default Root;