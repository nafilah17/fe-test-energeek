import { Table, Container, Button, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faClockRotateLeft,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import React, { Component } from "react";
import { API_URL } from "../utils/constants";
import axios from "axios";
// import AddItemModal from "./AddItemModal";
// import EditItemModal from "./EditItemModal";

export default class TableAdmin extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      showModalAddItem: false,
      // showModalEditItem: false,
      // productEdit: false,
    };
  }

  handleShowModalAddItem = () => {
    this.setState({
      showModalAddItem: true,
    });
  };

  handleCloseModalAddItem = () => {
    this.setState({
      showModalAddItem: false,
    });
  };

  // handleShowModalEditItem = (item) => {
  //   this.setState({
  //     showModalEditItem: true,
  //     productEdit: item,
  //   });
  // };

  // handleCloseModalEditItem = () => {
  //   this.setState({
  //     showModalEditItem: false,
  //   });
  // };

  componentDidMount() {
    axios
      .get(API_URL + "product_items")
      .then((res) => {
        const products = res.data;
        this.setState({ products });
        console.log("data", products);
      })
      .catch((error) => {
        console.log("err", error);
      });
  }
  render() {
    const { products } = this.state;
    return (
      <>
        <div>
          <Container>
            <Row className="mt-4">
              <Col xs={12} md={8}>
                <h2>Admin Inventory</h2>
              </Col>
              <Col xs={6} md={4} className="justify-content-end">
                <Button onClick={() => this.handleShowModalAddItem()}>
                  Add Data
                </Button>
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
                        <Button variant="outline-dark" className="mx-1">
                          <FontAwesomeIcon
                            icon={faPencil}
                            // onClick={() => this.handleShowModalEditItem(item)}
                          />
                        </Button>
                        <Button
                          variant="outline-dark"
                          className="mx-1"
                          href="/user-history"
                        >
                          <FontAwesomeIcon icon={faClockRotateLeft} />
                        </Button>
                        <Button variant="outline-dark" className="mx-1">
                          <FontAwesomeIcon icon={faTrash} />
                        </Button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </Table>
          </Container>
        </div>
        {/*  modal add item  */}
        {/* <AddItemModal
          handleClose={this.handleCloseModalAddItem}
          {...this.state}
        /> */}
        {/* modal edit item */}
        {/* <EditItemModal
          handleClose={this.handleCloseModalEditItem}
          {...this.state}
        /> */}
      </>
    );
  }
}
