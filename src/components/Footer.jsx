import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaGithub, FaStackOverflow, FaLinkedinIn } from 'react-icons/fa';

// Footer to display on every page.
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer>
      <Container
        className="position-absolute text-center"
        style={{ bottom: '2rem' }}
      >
        <p>Mining Mars &copy; {currentYear}</p>
      </Container>
      
    </footer>
  );
}
