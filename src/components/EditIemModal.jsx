import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const EditItemModal = (showModalEditItem, handleCloseModalEditItem) => {
  return (
    <Modal show={showModalEditItem} onHide={handleCloseModalEditItem}>
      <Modal.Header closeButton>
        <Modal.Title>
          <strong>Edit Data</strong>
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
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseModalEditItem}>
          Batal
        </Button>
        <Button variant="primary" onClick={handleCloseModalEditItem}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditItemModal;
