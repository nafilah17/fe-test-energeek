import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { TableAdmin } from "../components";

export default class Admin extends Component {
  render() {
    return (
      <div className="mt-3">
        <Container fluid>
          <TableAdmin />
        </Container>
      </div>
    );
  }
}
