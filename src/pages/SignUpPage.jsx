import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import SignUpForm from './SignUpForm';
import { FaPhoneAlt, FaSms } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function SignUpPage() {
  return (
    <>
      <Row className="text-secondary">
        <h2 className="my-3">Sign Up</h2>
        <Col lg={7}>
          <SignUpForm />
        </Col>
        <Col className="h6">
          <Card className="p-3 ">
            <Row>
              <Link to="tel:+18180000000">
                <FaPhoneAlt />
                <span className="m-2">(818)-000-0000</span>
              </Link>
            </Row>
            <Row className="my-3">
              <Link to="sms:+18180000000">
                <FaSms />
                <span className="m-2">(818)-000-0000</span>
              </Link>
            </Row>
            <Row>
              <Link to="mailto:example@gmail.com">
                <MdEmail />
                <span className="m-2">example@gmail.com</span>
              </Link>
            </Row>
          </Card>
        </Col>
      </Row>
    </>
  );
}
