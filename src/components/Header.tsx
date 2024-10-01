
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header: React.FC<{}> = () => {

    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to="/" style={{ textDecoration: 'none' , color: 'black', border: '1px solid #ccc', padding: '0.5rem 1rem', borderRadius: '4px' }} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
            Quiz App
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/create" style={{ textDecoration: 'none' , color: 'black', border: '1px solid #ccc', padding: '0.5rem 1rem', borderRadius: '4px' }} className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white">
              Create Quiz
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;
