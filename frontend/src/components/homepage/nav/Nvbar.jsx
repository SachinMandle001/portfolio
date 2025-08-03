import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import './nv.css';

function Nvbar() {
  return (
    <>
      {['lg'].map((expand) => (
        <Navbar fixed='top' key={expand} expand={expand} className="bggr py-0 px-2">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className='headfnt'>
              <img src="smlogo.png" as={Link} to="/" alt="s" className=' me-1' width={'82px'} />
              SACHIN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  <Navbar.Brand as={Link} to="/" className='headfnt'>
                    <img src="smlogo.png" alt="s" className=' me-1' width={'70px'} />
                    SACHIN
                  </Navbar.Brand>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-center flex-grow-1 me-5 gap-lg-4 mb-3 mb-lg-0">
                  <Nav.Link as={Link} to="/">Home</Nav.Link>
                  <Nav.Link as={Link} to="/about">About</Nav.Link>
                  <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                  <Nav.Link as={Link} to="/projects">Project</Nav.Link>
                  <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                </Nav>
                {/* <Form className="d-flex mb-4 mb-md-2 mb-lg-0">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-1"
                    aria-label="Search"
                  />
                  <Button variant=" btn-outline-light btn-sm " className=''>Search</Button>
                </Form> */}
                <Link
                  to="/login"
                  className="orngebtn text-white rounded-4 p-2 px-3  text-decoration-none align-content-center me-lg-5"
                >
                 Login/Register
                </Link>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Nvbar;
