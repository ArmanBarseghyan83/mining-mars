import { useState } from 'react';
import { Row, Col, Button, Form, Card } from 'react-bootstrap';

export default function ContantForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    // Don't let to submit if fields are empty.
    if ((!name, !email)) return;

    // Clean the fields after submit.
    setName('');
    setEmail('');
  };

  return (
    <Row className="justify-content-md-center">
      <Col>
        <Card className="mb-2">
          <Form className="p-4 pb-5" onSubmit={submitHandler}>
            <Form.Group className="my-2" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Form.Group className="my-2" controlId="email">
              <Form.Label>Email Address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Submit
            </Button>
          </Form>
        </Card>
      </Col>
    </Row>
  );
}
