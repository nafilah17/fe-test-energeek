import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddItemModal = (showModalAddItem, handleCloseModalAddItem) => {
  return (
    <Modal show={showModalAddItem} onHide={handleCloseModalAddItem}>
      <Modal.Header closeButton>
        <Modal.Title>
          <strong>Tambah Data Baru</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Kode Barang</Form.Label>
            <Form.Control type="text" placeholder="Masukkan kode barang" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Nama Barang</Form.Label>
            <Form.Control type="text" placeholder="Masukkan nama barang" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Stok Minimal</Form.Label>
            <Form.Control type="number" placeholder="Contoh: 1" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Stok Awal</Form.Label>
            <Form.Control type="number" placeholder="Contoh: 1" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModalAddItem}>
          Batal
        </Button>
        <Button variant="primary" onClick={handleCloseModalAddItem}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddItemModal;
