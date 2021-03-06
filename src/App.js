import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register"
import Reddit from "./components/Reddit"
import Input from "./components/Input"

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
        <li>
          <Link to="/reddit">Reddit</Link>
        </li>
        <Switch>
          <Route path="/signin" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/reddit" component={Reddit} />
        </Switch>
        <Input/>
      </div>
    </Router>
  );
}

export default App;
