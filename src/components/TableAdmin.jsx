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
import ProductService from "../services/service";

const TableAdmin = () => {
  // getAll data
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = () => {
    ProductService.getAll().then((response) => {
      setProducts(response.data);
      console.log("data product", response.data);
    });
  };

  // initialstate
  const initialstateProduct = {
    id: null,
    no: "",
    code: "",
    name: "",
    is_ready: false,
    minimal_stock: "",
    stock: "",
  };
  // get data
  const [product, setProduct] = useState(initialstateProduct);

  function handleInputChange(e) {
    setProduct({ value: e.target.value });
  }

  const handleSubmit = (e) => {
    alert("A name was submitted");
    e.preventDefault();
    var data = {
      code: product.code,
      name: product.name,
      minimal_stock: product.minimal_stock,
      stock: product.stock,
      no: product.no,
      is_ready: product.is_ready,
    };
    ProductService.create(data)
      .then((res) => {
        // setProduct({
        //   id: res.data.id,
        //   code: res.data.code,
        //   name: res.data.name,
        //   minimal_stock: res.data.minimal_stock,
        //   stock: res.data.stock,
        //   is_ready: res.data.is_ready,
        // });
        console.log("res submit", res.data);
      })
      .catch((err) => console.log("err", err));
  };
  // state add inventory
  const [showAdd, setShowAdd] = useState(false);
  // state edit inventory
  const [showEdit, setShowEdit] = useState(false);

  // // post data
  // const [code, setCode] = useState("");
  // const [name, setName] = useState("");
  // const [minimal_stock, setMinimalStock] = useState("");
  // const [stock, setStock] = useState("");

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
              products.map((product) => (
                <tr key={product.id}>
                  <td>{product.no}</td>
                  <td>{product.code}</td>
                  <td>{product.name}</td>
                  <td>{product.minimal_stock}</td>
                  <td>{product.stock}</td>
                  <td>{product.stock_status}</td>
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
            <Form.Group className="mb-3" controlId="code">
              <Form.Label>Kode Barang</Form.Label>
              <Form.Control
                value={product.code}
                onChange={handleInputChange}
                name="code"
                type="text"
                placeholder="Masukkan kode barang"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="name">
              <Form.Label>Nama Barang</Form.Label>
              <Form.Control
                value={product.name}
                onChange={handleInputChange}
                name="name"
                type="text"
                placeholder="Masukkan nama barang"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="minimal_stock">
              <Form.Label>Stok Minimal</Form.Label>
              <Form.Control
                value={product.minimal_stock}
                onChange={handleInputChange}
                name="minimal_stock"
                type="number"
                placeholder="Contoh: 1"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="stock">
              <Form.Label>Stok Awal</Form.Label>
              <Form.Control
                value={product.stock}
                onChange={handleInputChange}
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
      {/* <Modal show={showEdit} onHide={handleCloseEdit}>
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
      </Modal> */}
    </div>
  );
};

export default TableAdmin;

// // modal form
//
