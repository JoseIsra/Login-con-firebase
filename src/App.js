import {
  BrowserRouter as Router,
  Route, Switch
} from 'react-router-dom'
import { Home, Signin, Signup } from './pages';
import { PrivateRoute } from './PrivateRoute'


import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <PrivateRoute exact path="/home">
            <Home />
          </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
