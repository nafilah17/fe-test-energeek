import React from "react";
import { Modal, Button, Form } from "react-bootstrap";

const AddTransactionModal = (showModalTransaction, handleCloseTransaction) => {
  return (
    <Modal show={showModalTransaction} onHide={handleCloseTransaction}>
      <Modal.Header closeButton>
        <Modal.Title>
          <strong>Tambah Data Transaksi</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Jenis Transaksi</Form.Label>
            <div key={`inline-radio`} className="mb-3">
              <Form.Check
                inline
                label="Menambah"
                name="group1"
                type="radio"
                id={`inline-radio-1`}
              />
              <Form.Check
                inline
                label="Mengurangi"
                name="group1"
                type="radio"
                id={`inline-radio-2`}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Jumlah </Form.Label>
            <Form.Control type="text" placeholder="Masukkan jumlah" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleCloseTransaction}>
          Batal
        </Button>
        <Button variant="primary" onClick={handleCloseTransaction}>
          Simpan
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddTransactionModal;
