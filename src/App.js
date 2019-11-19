import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register"

function App() {
  return (
    <Router>
      <div className="App">
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
        <Switch>
          <Route path="/signin" component={Login} />
          <Route path="/register" component={Register} />
        </Switch>
        <Login />
      </div>
    </Router>
  );
}

export default App;
