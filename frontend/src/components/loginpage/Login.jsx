import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import Nvbar from '../homepage/nav/Nvbar';
import Ft from '../homepage/footer/Ft';
import './loginform.css';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ SweetAlert2

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const [loggedIn, setLoggedIn] = useState(!!localStorage.getItem('token'));

  const handleLogin = async (e) => {
    e.preventDefault();
    
    try {
      const res = await axios.post('/login', { email, password });
      
      if (res.data.success) {
          localStorage.setItem('token',res.data.token);
          localStorage.setItem('email', email);
          setLoggedIn(true);
          console.log(res.data.token);
          
        // ✅ SweetAlert success
        Swal.fire({
          title: 'Login Successful!',
          text: res.data.message || 'Welcome back!',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#FF6000',
          customClass: {
            popup: 'rounded-4'
          }
        }).then(() => {
          setEmail('');
          setPassword('');
          navigate('/education');
        });
      } else {
        // Optional: SweetAlert for invalid credentials
        Swal.fire({
          title: 'Login Failed!',
          text: res.data.message || 'Invalid email or password.',
          icon: 'error',
          confirmButtonText: 'Try Again',
          confirmButtonColor: '#d33',
        });
      }

    } catch (err) {
      Swal.fire({
        title: 'Server Error',
        text: 'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  

  return (
    <>
      <Nvbar />
      <div style={{ marginTop: '60px' }} className="login-wrapper py-5">
        <Container data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="p-4 shadow-lg login-card rounded-4">
                <h1 className="text-center mb-4 orangetext">Login</h1>
                <hr />
                <Form onSubmit={handleLogin}>
                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaLock />
                      </InputGroup.Text>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                      <InputGroup.Text
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ cursor: 'pointer' }}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  <div className="d-grid mb-3">
                    <Button variant="primary" type="submit">
                      Login
                    </Button>
                  </div>
                </Form>

                <p className="text-center mt-3 fs-6">
                  Don’t have an account?{' '}
                  <Link to="/register" className="text-decoration-none">
                    Click here
                  </Link>
                </p>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
      <Ft />
    </>
  );
};

export default Login;
