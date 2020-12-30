import { useState, useLayoutEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
  // useRouteMatch,
  useLocation,
} from "react-router-dom";
import { Login, Home } from "../../containers";

// ************* Private Route ************

function PrivateRoute({ component: Component, auth, ...rest }) {
  return (
    <Route
      {...rest}
      render={(props) =>
        auth === true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: {
                from: props.location.pathname,
              },
            }}
          />
        )
      }
    />
  );
}

// ************* Public Route ************

function PublicRoute({ component: Component, auth, ...rest }) {
  const location = useLocation();
  return (
    <Route
      {...rest}
      render={(props) => {
        return auth === false ? (
          <Component {...props} />
        ) : (
          <Redirect to={location.state?.from ? location.state.from : "/home"} />
        );
      }}
    />
  );
}

function AppRouter() {
  const [authed, setAuthed] = useState(false);
  useLayoutEffect(() => {
    if (true) {
      setAuthed(true);
    } else {
      setAuthed(false);
    }
  }, []);
  return (
    <Router>
      <Switch>
        <PublicRoute auth={authed} exact path="/" component={Login} />
        <PrivateRoute auth={authed} exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
