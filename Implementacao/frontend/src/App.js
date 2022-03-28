import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { pages } from './utils/consts'

const App = () => {

  return (
    <Router>
      <Switch>
        {pages.map(page => <Route path={page.path} exact={true} component={page.component} />)}
      </Switch>
    </Router>
  );
}

export default App
