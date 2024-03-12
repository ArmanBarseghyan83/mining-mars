import { Nav } from 'react-bootstrap';
import { LinkContainer, Link } from 'react-router-bootstrap';
import '../../styles/Header.css';
import { FaFacebook, FaInstagram, FaTwitter, FaTiktok } from 'react-icons/fa6';
import { IoLogoYoutube } from 'react-icons/io';

export default function Navigation({ links }) {
  return (
    <nav className="navbar fixed-top p-0">
      <header className="header">
        <LinkContainer to="/">
          <h2 className="logo">Mining Mars</h2>
        </LinkContainer>
        <div className="social-media">
          <a href="/">
            <FaFacebook />
          </a>
          <a href="/">
            <FaInstagram />
          </a>
          <a href="/">
            <FaTwitter />
          </a>
          <a href="/">
            <IoLogoYoutube />
          </a>
          <a href="/">
            <FaTiktok />
          </a>
        </div>
      </header>
      <div className="content">
        <Nav>
          {links.map((link, i) => (
            <LinkContainer key={i} to={link.path}>
              <Nav.Link>{link.title}</Nav.Link>
            </LinkContainer>
          ))}
        </Nav>
      </div>
    </nav>
  );
}
