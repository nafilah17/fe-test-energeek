import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Table,
  Container,
  Button,
  Row,
  Col,
  Modal,
  Form,
} from "react-bootstrap";
import swal from "sweetalert";

const HistoryTransaction = () => {
  useEffect(() => {
    getHistoryTransaction();
  }, []);

  // GET
  const [transaction, setTransaction] = useState([]);

  const getHistoryTransaction = () => {
    axios.get("http://localhost:5000/history/").then((response) => {
      setTransaction(response.data);
      console.log("history", response.data);
    });
  };

  // initial data
  const [type_transaction, setTypeTransaction] = useState("");
  const [date_transaction, setDateTransaction] = useState("");
  const [total, setTotal] = useState("");

  const [showModal, setShowModal] = useState(false);

  const handleCloseModal = () => setShowModal(false);
  const handleShowModal = () => setShowModal(true);

  const handleSubmitModal = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/history/", {
        type_transaction,
        date_transaction,
        total,
      })
      .then((res) => {
        console.log("res submit", res.data);
        swal("Success!");
      })
      .catch((err) => console.log("err", err));
    swal("Error!");
  };

  return (
    <div>
      <Container>
        <Row className="mt-4">
          <Col xs={12} md={8}>
            <h2>History Transaction</h2>
          </Col>
          <Col xs={6} md={4} className="justify-content-end">
            <Button onClick={handleShowModal}>Add Data</Button>
          </Col>
        </Row>

        <Table responsive bordered hover className="mt-2">
          <thead>
            <tr>
              <th>No</th>
              <th>Transaction Date</th>
              <th>Transaction Type</th>
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {transaction &&
              transaction.map((item, index) => (
                <tr key={item.id}>
                  <td>{index}</td>
                  <td>{item.date_transaction}</td>
                  <td>{item.type_transaction}</td>
                  <td>{item.total}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Tambah Item</Modal.Title>
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
                  value={"Menambah"}
                  onChange={(e) => setTypeTransaction(e.target.value)}
                />
                <Form.Check
                  inline
                  label="Mengurangi"
                  name="group1"
                  type="radio"
                  id={`inline-radio-2`}
                  value={"Mengurangi"}
                  onChange={(e) => setTypeTransaction(e.target.value)}
                />
              </div>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Jumlah </Form.Label>
              <Form.Control
                value={total}
                onChange={(e) => setTotal(e.target.value)}
                type="text"
                placeholder="Masukkan jumlah"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tanggal Transaksi </Form.Label>
              <Form.Control
                value={date_transaction}
                onChange={(e) => setDateTransaction(e.target.value)}
                type="date"
                placeholder="Masukkan Tanggal"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmitModal}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default HistoryTransaction;
