import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <>
      <Container>
        <Header />
        <Container className="main-container position-relative min-vh-100">
          <Outlet />
          <Footer />
        </Container>
      </Container>
    </>
  );
}

export default App;
