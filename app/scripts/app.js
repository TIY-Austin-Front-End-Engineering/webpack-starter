import store from "./store.js";
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { render } from "react-dom";
import { Provider } from "react-redux";
import AppRoot from "./components/app_root.js";
import About from "./components/about.js";
import Contact from "./components/contact.js";

const Nav = () => (
  <nav>
    <li><Link to="/about">About</Link></li>
    <li><Link to="/contact-us">Contact</Link></li>
  </nav>
);

export default function app() {
  render(
    <Provider store={store}>
      <Router>
        <div>
          <Nav />
          <Route exact path="/" component={AppRoot} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact-us" component={Contact} />
        </div>
      </Router>
    </Provider>,
    document.getElementById("app")
  );
}
