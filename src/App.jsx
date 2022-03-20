import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components";
import { Admin, User, UserHistory, Login } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" exact element={<Login />} />
            {/* <Login />
            </Route> */}
            <Route path="/admin" element={<Admin />} />
            {/* <Admin />
            </Route> */}
            <Route path="/user" element={<User />} />
            {/* <User />
            </Route> */}
            <Route path="/user-history" element={<UserHistory />} />
            {/* <UserHistory />
            </Route> */}
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
