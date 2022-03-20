import React, { useEffect, useState } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { HistoryTransaction } from "../components";
import axios from "axios";

const UserHistory = () => {
  useEffect(() => {
    getProduct();
  }, []);

  // GET
  const [product, setProduct] = useState([]);

  const getProduct = () => {
    axios.get("http://localhost:5000/product_items?.id").then((response) => {
      setProduct(response.data);
      console.log("data product", response.data);
    });
  };
  return (
    <div className="mt-3">
      <Container>
        <Card>
          <Card.Body>
            <Row className="text-center mx-10">
              {product.map((product) => (
                <>
                  <Col xs={3} md={3}>
                    Code Item
                    <br />
                    <strong>{product.code}</strong>
                  </Col>
                  <Col xs={3} md={3}>
                    Name
                    <br />
                    <strong>{product.name}</strong>
                  </Col>
                  <Col xs={3} md={3}>
                    Total Stock
                    <br />
                    <strong>{product.stock}</strong>
                  </Col>
                  <Col xs={3} md={3}>
                    Stock Minimal
                    <br />
                    <strong>{product.minimal_stock}</strong>
                  </Col>
                </>
              ))}
            </Row>
          </Card.Body>
        </Card>
        <HistoryTransaction />
      </Container>
    </div>
  );
};

export default UserHistory;
