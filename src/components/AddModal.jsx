import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const AddModal = ({ showAdd, handleCloseAdd }) => {
  // post data
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [minimal_stock, setMinimalStock] = useState("");
  const [stock, setStock] = useState("");
  return (
    <div>
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
          <Button variant="primary">Submit</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AddModal;
