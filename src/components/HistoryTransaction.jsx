import { Table, Container, Button, Row, Col } from "react-bootstrap";

import React, { Component } from "react";
import { API_URL } from "../utils/constants";
import axios from "axios";

export default class HistoryTransaction extends Component {
  constructor(props) {
    super(props);

    this.state = {
      transaction: [],
    };
  }

  componentDidMount() {
    axios
      .get(API_URL + "history")
      .then((res) => {
        const transaction = res.data;
        this.setState({ transaction });
        console.log("data", transaction);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }
  render() {
    const { transaction } = this.state;
    return (
      <div>
        <Container>
          <Row className="mt-4">
            <Col xs={12} md={8}>
              <h2>History Transaction</h2>
            </Col>
            <Col xs={6} md={4} className="justify-content-end">
              <Button>Add Data</Button>
            </Col>
          </Row>

          <Table responsive bordered hover className="mt-2">
            <thead>
              <tr>
                <th>No</th>
                <th>Transaction Date</th>
                <th>Transaction Type</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              {transaction &&
                transaction.map((item) => (
                  <tr key={item.id}>
                    <td>{item.no}</td>
                    <td>{item.date_transaction}</td>
                    <td>{item.type_transaction}</td>
                    <td>{item.total}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
        </Container>
      </div>
    );
  }
}
