import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { NavbarComponent } from "./components";
import { Admin, User, UserHistory } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Switch>
            <Route path="/" exact>
              <Admin />
            </Route>
            {/* <Route path="/user" exact>
              <User />
            </Route>
            <Route path="/user-history" exact>
              <UserHistory />
            </Route> */}
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}
