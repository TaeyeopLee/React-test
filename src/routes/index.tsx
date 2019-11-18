import * as React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

const Root: React.FC = () => (
  // TODO 루트 라우터를 반환한다
  <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/memo" component={Memo} />
      <Route path="/trash" component={Trash} />
      <Redirect path="*" to="/" />
    </Switch>
  </BrowserRouter>
)

export default Root;