import React from 'react';
import './App.css';
import Login from './screens/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import MainPage from './screens/MainPage';
import useLoggedUser from './hooks/useLoggedUser';

interface privateRouteProps {
  path: string,
  component: any,
  loggedin: boolean | null,
}

const PrivateRoute = (props: privateRouteProps) => {
  return (
    <Route
      path={props.path}
      render={(p) => (props.loggedin
        ? <props.component {...p} />
        : <Redirect to={{ pathname: '/login' }} />)}
    />
  )
};

const App = () => {
  const isLoggedin = useLoggedUser()
  return (
    <Router>
        <Switch>
          <Route exact path="/"><Redirect to="/main" /></Route>
          <Route path="/login">
            {!isLoggedin
              ? <Login />
              : <Redirect to="/main" />}
          </Route>
          <PrivateRoute
            path="/main"
            component={MainPage}
            loggedin={isLoggedin}
          />
        </Switch>
    </Router>
  );
}

export default App;
