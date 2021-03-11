import "./App.css";
import React from "react";
import { Details } from "./Details";
import { Contacts } from "./Contacts";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/message">
          <About />
        </Route>
        <Route path="/details">
          <Details />
        </Route>
        <Route path="/">
          <Contacts />
        </Route>
      </Switch>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}
