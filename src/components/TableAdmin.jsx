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
// import ProductService from "../services/service";
import axios from "axios";

const TableAdmin = () => {
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

  // initial post data
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [minimal_stock, setMinimalStock] = useState("");
  const [stock, setStock] = useState("");
  const [no, setNo] = useState("");
  const [stock_status, setStockStatus] = useState("");

  // POST
  const handleSubmit = (e) => {
    alert(" Data was submitted");
    e.preventDefault();
    axios
      .post("http://localhost:5000/product_items/", {
        no,
        code,
        name,
        minimal_stock,
        stock,
        stock_status: stock_status ?? "Aman",
        // is_ready,
      })
      .then((res) => {
        console.log("res submit", res.data);
      })
      .catch((err) => console.log("err", err));
  };

  // PUT
  const handleUpdate = (e) => {
    alert("A name was editted");
    e.preventDefault();
    axios
      .put("http://localhost:5000/product_items/", {
        no,
        code,
        name,
        minimal_stock,
        stock,
        // is_ready,
      })
      .then((res) => {
        console.log("res edit", res.data);
      })
      .catch((err) => console.log("err", err));
  };

  // REMOVE
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:5000/product_items/${id}`)
      .then((response) => {
        console.log("delete", response);
      });
  };

  // state add inventory
  const [showAdd, setShowAdd] = useState(false);
  // state edit inventory
  const [showEdit, setShowEdit] = useState(false);

  const handleCloseAdd = () => setShowAdd(false);
  const handleShowAdd = () => setShowAdd(true);

  const handleCloseEdit = () => setShowEdit(false);
  const handleShowEdit = () => setShowEdit(true);

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
            {products &&
              products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index}</td>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.minimal_stock}</td>
                  <td>{product.stock}</td>
                  <td>{product.stock_status}</td>
                  <td>
                    <Button
                      variant="outline-dark"
                      className="mx-1"
                      onClick={() => handleShowEdit(product.id)}
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
                    <Button
                      variant="outline-dark"
                      className="mx-1"
                      onClick={() => deleteProduct(product.id)}
                    >
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
            <Form.Group className="mb-3" controlId="code">
              <Form.Label>Kode Barang</Form.Label>
              <Form.Control
                value={code}
                onChange={(e) => setCode(e.target.value)}
                name="code"
                type="text"
                placeholder="Masukkan kode barang"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                value={name}
                onChange={(e) => setName(e.target.value)}
                name="name"
                type="text"
                placeholder="Masukkan nama barang"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="minimal_stock">
              <Form.Label>Stok Minimal</Form.Label>
              <Form.Control
                value={minimal_stock}
                onChange={(e) => setMinimalStock(e.target.value)}
                name="minimal_stock"
                type="number"
                placeholder="Contoh: 1"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label>Stok Awal</Form.Label>
              <Form.Control
                value={stock}
                onChange={(e) => setStock(e.target.value)}
                name="stock"
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
          <Button variant="primary" onClick={handleUpdate}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableAdmin;

// // modal form
//
