import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import './nv.css';

function Nvbar() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');
    if (token) {
      setLoggedIn(true);
      setUserEmail(email || '');
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('email');
    setLoggedIn(false);
    navigate('/login');
  };

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar fixed='top' key={expand} expand={expand} className="bggr py-0 px-2">
          <Container fluid>
            <Navbar.Brand as={Link} to="/" className='headfnt me-0'>
              <img src="smlogo.png" alt="s" className='me-1' width={'70px'} />
              SACHIN
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              onHide={() => {
                document.body.style.overflow = 'auto';
                document.body.style.paddingRight = '0px';
              }}
            >
              <Offcanvas.Header closeButton className="p-0 d-lg-none">

                {/* Logo + Name */}
                <div className="w-100 p-2 my-2 d-flex align-items-center justify-content-start text-white">
                  <img src="smlogo.png" alt="s" width="70px" className="me-2" />
                  <span className="headfnt fs-5 mb-0">SACHIN</span>
                </div>

                {/* User Info */}
                <div className=" p-2 border mx-2 border-1 rounded-4 border-white d-flex align-items-center justify-content-start text-white">
                 
                  {!loggedIn ? (
<>
                      <FaUserCircle size={42} className="me-2 text-secondary" />
                      <h4 className="fs-6 mb-0 ms-2 ">not signed in </h4>
                    </>
                   
                  ) : (
                    <>
                      <FaUserCircle size={42} className="me-2" />
                      <h4 className="fs-6 mb-0 ms-2">{userEmail}</h4>
                    </>
                  )}
                </div>

                {/* Logout Button */}
                {loggedIn ? (
                  <div className="w-100 p-3 border-bottom pb-3">
                    <button className="btn btn-primary w-100" onClick={handleLogout}>
                      Logout
                    </button>
                  </div>
                ):(
                  <div className="w-100 p-3 border-bottom pb-3">
                   <Link
                      to="/login"
                      className="w-100 d-block text-center orngebtn text-white fs-6 text-decoration-none px-3 py-2 my-2"
                    >
                      Login/Register
                    </Link></div>
                )}

              </Offcanvas.Header>


              <Offcanvas.Body className=''>
                <div className="d-flex align-items-center w-100">
                  {/* Center Navigation Links */}
                  <Nav className="justify-content-center flex-grow-1 gap-lg-4 mb-3 mb-lg-0">
                    <Nav.Link as={Link} to="/">Home</Nav.Link>
                    <Nav.Link as={Link} to="/about">About</Nav.Link>
                    <Nav.Link as={Link} to="/skills">Skills</Nav.Link>
                    <Nav.Link as={Link} to="/projects">Project</Nav.Link>
                    <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                    {loggedIn && <Nav.Link as={Link} to="/education">Education</Nav.Link>}
                  </Nav>

                  {/* Right Side Login/Register or Dropdown */}
                  <div className="ms-auto">
                    {!loggedIn ? (
                      <Link
                        to="/login"
                        className="d-none d-lg-block orngebtn text-white rounded-4 text-decoration-none px-3 py-2 me-lg-5"
                      >
                        Login/Register
                      </Link>
                    ) : (
                      <Dropdown align="end" className="bggr d-none d-lg-block me-lg-4">
                        <Dropdown.Toggle
                          variant="light"
                          id="dropdown-basic"
                          className="bg-transparent border-0 text-white"
                        >
                          <FaUserCircle size={32} />
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="bggr">
                          <Dropdown.ItemText>
                            Signed in as <br /> <strong>{userEmail}</strong>
                          </Dropdown.ItemText>
                          <Dropdown.Divider />
                          <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    )}
                  </div>
                </div>




              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Nvbar;
