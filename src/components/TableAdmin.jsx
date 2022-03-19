import React, { useState, useEffect } from "react";
import {
  Modal,
  Button,
  Container,
  Row,
  Col,
  Table,
  Form,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faClockRotateLeft,
  faPencil,
} from "@fortawesome/free-solid-svg-icons";
import { API_URL } from "../utils/constants";
import axios from "axios";

const TableAdmin = () => {
  // get data
  const [product, setProduct] = useState([]);
  // modal add inventory
  const [showAdd, setShowAdd] = useState(false);

  // modal edit inventory
  const [showEdit, setShowEdit] = useState(false);
  // post data
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [minimal_stock, setMinimalStock] = useState("");
  const [stock, setStock] = useState("");

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

  // useEffect(() => {
  //   fetch(API_URL + "product_items")
  //     .then((response) => {
  //       console.log("response", response);
  //       return response.json();
  //     })
  //     .then((product) => {
  //       setProduct(product);
  //       console.log("product", product);
  //     })
  //     .catch((err) => {
  //       console.log("Error Reading data " + err);
  //     });
  // }, []);

  axios
    .get(API_URL + "product_items")
    .then((product) => {
      setProduct(product.data);
      console.log("product", product.data);
    })
    .catch((err) => {
      console.log("Error Reading data " + err);
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(API_URL + "product_items", {
        // no,
        // id,
        name,
        code,
        minimal_stock,
        stock,
      })
      .then((response) => {
        // console.log("status", response.status);
        console.log("submit", response.postInventory);
      })
      .catch((err) => {
        console.log("Error Reading data " + err);
      });
  };
  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col xs={12} md={8}>
            <h2>Admin Inventory</h2>
          </Col>
          <Col xs={6} md={4} className="justify-content-end">
            <Button variant="primary" onClick={handleShowAdd}>
              Add
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
            {product &&
              product.map((item) => (
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
                      onClick={handleShowEdit}
                    >
                      <FontAwesomeIcon icon={faPencil} />
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

      {/* modal add */}
      <Modal show={showAdd} onHide={handleCloseAdd}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kode Barang</Form.Label>
              <Form.Control
                onChange={(e) => setCode(e.target.value)}
                value={code}
                type="text"
                placeholder="Masukkan kode barang"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Masukkan nama barang"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stok Minimal</Form.Label>
              <Form.Control
                onChange={(e) => setMinimalStock(e.target.value)}
                value={minimal_stock}
                type="number"
                placeholder="Contoh: 1"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stok Awal</Form.Label>
              <Form.Control
                onChange={(e) => setStock(e.target.value)}
                value={stock}
                type="number"
                placeholder="Contoh: 1"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal edit */}
      <Modal show={showEdit} onHide={handleCloseEdit}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Kode Barang</Form.Label>
              <Form.Control
                onChange={(e) => setCode(e.target.value)}
                value={code}
                type="text"
                placeholder="Masukkan kode barang"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Masukkan nama barang"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Stok Minimal</Form.Label>
              <Form.Control
                onChange={(e) => setMinimalStock(e.target.value)}
                value={minimal_stock}
                type="number"
                placeholder="Contoh: 1"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableAdmin;
