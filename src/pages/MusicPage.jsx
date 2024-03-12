import { Row, Col, Container } from 'react-bootstrap';
import Music from '../components/Music';
import data from '../assets/data/musicData';

export default function MusicPage() {
  return (
    <Container >
      <Row>
        <h2 className="my-3">Music</h2>
        {/* Map over projects data and display the Project component for each project */}
        {data.map((music) => (
          <Col key={music.id} sm={12} md={6} >
            <Music
              title={music.title}
              image={music.image}
              demo={music.demo}
              github={music.github}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
