import {
  Table,
  Container,
  Button,
  Row,
  Col,
  InputGroup,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClockRotateLeft } from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { API_URL } from "../utils/constants";
import axios from "axios";
// import AddTransactionModal from "./AddTransactionModal";

export default class TableAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      showModalTransaction: false,
    };
  }
  handleShowTransaction = () => {
    this.setState({
      showModalTransaction: true,
    });
  };

  handleCloseTransaction = () => {
    this.setState({
      showModalTransaction: false,
    });
  };

  // componentDidMount() {
  //   axios
  //     .get(API_URL + "product_items")
  //     .then((res) => {
  //       const products = res.data;
  //       this.setState({ products });
  //       console.log("data", products);
  //     })
  //     .catch((error) => {
  //       console.log("err", error);
  //     });
  // }
  render() {
    const { products } = this.state;
    return (
      <>
        <div>
          <Container>
            <Row className="mt-4">
              <Col xs={12} md={8}>
                <h2>User Inventory</h2>
              </Col>
              <Col xs={6} md={4} className="text-align-end">
                <InputGroup className="mb-3">
                  <FormControl
                    placeholder="Search"
                    aria-label="Search"
                    aria-describedby="basic-addon2"
                  />
                  <Button
                    // onClick={this.handleShowTransaction}
                    variant="outline-secondary"
                    id="button-addon2"
                  >
                    Button
                  </Button>
                </InputGroup>
              </Col>
            </Row>

            <Table responsive bordered hover className="mt-2">
              <thead>
                <tr>
                  <th>No</th>
                  <th>Code Item</th>
                  <th>Name Item</th>
                  <th>Minimal Stock</th>
                  <th>Stock</th>
                  <th>Stock Status</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products &&
                  products.map((item) => (
                    <tr key={item.id}>
                      <td>{item.no}</td>
                      <td>{item.code}</td>
                      <td>{item.name}</td>
                      <td>{item.minimal_stock}</td>
                      <td>{item.stock}</td>
                      <td>{item.stock_status}</td>
                      <td>
                        <Button
                          variant="outline-dark"
                          className="mx-1"
                          href="/user-history"
                        >
                          <FontAwesomeIcon icon={faClockRotateLeft} />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
        </div>
        {/* modal add transaction */}
        {/* <AddTransactionModal
          handleClose={this.handleCloseTransaction}
          {...this.state}
        /> */}
      </>
    );
  }
}
