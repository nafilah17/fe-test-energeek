import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { HistoryTransaction } from "../components";

export default class UserHistory extends Component {
  render() {
    return (
      <div className="mt-3">
        <Container>
          <Card>
            <Card.Body>
              <Row className="text-center mx-10">
                <Col xs={3} md={3}>
                  Code Item
                  <br />
                  <strong>BRG-001</strong>
                </Col>
                <Col xs={3} md={3}>
                  Name
                  <br />
                  <strong>Komputer</strong>
                </Col>
                <Col xs={3} md={3}>
                  Total Stock
                  <br />
                  <strong>10</strong>
                </Col>
                <Col xs={3} md={3}>
                  Stock Minimal
                  <br />
                  <strong>1</strong>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <HistoryTransaction />
        </Container>
      </div>
    );
  }
}
