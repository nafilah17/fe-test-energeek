import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavbarComponent } from "./components";
import { Admin, User, Login, UserHistory } from "./pages";

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <main>
          <Routes>
            <Route path="/" exact element={<Login />} />

            <Route path="/admin" element={<Admin />} />

            <Route path="/user" element={<User />} />

            <Route path="/user-history/:id" element={<UserHistory />} />
          </Routes>
        </main>
      </BrowserRouter>
    );
  }
}
