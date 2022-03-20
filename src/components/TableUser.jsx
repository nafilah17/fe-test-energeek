import React, { useEffect, useState } from "react";

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
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TableUser = () => {
  useEffect(() => {
    getProducts();
  }, []);

  // GET
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    axios.get("http://localhost:5000/product_items/").then((response) => {
      setProducts(response.data);
      console.log("data product", response.data);
    });
  };

  const navigate = useNavigate();
  return (
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
              products.map((item, index) => (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.code}</td>
                  <td>{item.name}</td>
                  <td>{item.minimal_stock}</td>
                  <td>{item.stock}</td>
                  {item.stock > 1 ? <td>Aman</td> : <td>Tidak Aman</td>}
                  <td>
                    <Button
                      variant="outline-dark"
                      className="mx-1"
                      onClick={() => navigate(`/user-history/${item.id}`)}
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
  );
};

export default TableUser;
