import { Row, Col, Image } from 'react-bootstrap';
import hero from '../assets/images/hero.png';

export default function AboutPage() {
  return (
    <>
      <Row className="mt-lg-4">
        <Col md={3} xs={5} className="m-auto">
          <Image src={hero} alt="mining-mars" fluid />
        </Col>
        <Col lg={8} xs={12} className="m-auto">
          <h2 className="mb-4">About Us</h2>
          <p className="h5" style={{ lineHeight: '1.5' }}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos dolore velit sint, accusamus laudantium magni error ex,
            molestias magnam corporis, aliquam vitae atque impedit aliquid
            possimus aperiam eius cum quas!
          </p>
          <p className="h5" style={{ lineHeight: '1.5' }}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Dignissimos dolore velit sint, accusamus laudantium magni error ex,
            molestias magnam corporis, aliquam vitae atque impedit aliquid
            possimus aperiam eius cum quas!
          </p>
        </Col>
      </Row>
    </>
  );
}
