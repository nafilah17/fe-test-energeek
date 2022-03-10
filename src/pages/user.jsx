import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { TableUser } from "../components";

export default class User extends Component {
  render() {
    return (
      <div className="mt-3">
        <Container fluid>
          <TableUser />
        </Container>
      </div>
    );
  }
}
