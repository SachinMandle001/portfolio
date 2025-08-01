import React, { useState } from 'react';
import { Container, Row, Col, Card, Form, Button, InputGroup } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FaEnvelope, FaLock, FaUser, FaEye, FaEyeSlash } from 'react-icons/fa';
import Nvbar from '../homepage/nav/Nvbar';
import Ft from '../homepage/footer/Ft';
import './registerform.css';
import axios from 'axios';
import Swal from 'sweetalert2'; // ✅ SweetAlert2 import

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{4,}$/;
    return regex.test(password);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, password } = formData;

    if (!name.trim() || !email.trim() || !password.trim()) {
      setError('Please fill in all fields without spaces only.');
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 4 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character.");
      return;
    }

    setError('');

    try {
      await axios.post('/user', formData);

      Swal.fire({
        title: 'Registration Successful!',
        text: 'You have been registered successfully.',
        icon: 'success',
        confirmButtonText: 'OK',
        confirmButtonColor: '#FF6000',
        customClass: {
          popup: 'rounded-4'
        }
      }).then(() => {
        navigate('/login');
      });

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Nvbar />
      <div style={{ marginTop: '70px' }} className="login-wrapper py-5">
        <Container data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300" >
          <Row className="justify-content-center">
            <Col xs={12} md={6} lg={4}>
              <Card className="p-4 shadow-lg login-card rounded-4">
                <h1 className="text-center mb-4 orangetext">Register</h1>
                <hr />
                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formname">
                    <Form.Label>Full Name</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaUser />
                      </InputGroup.Text>
                      <Form.Control
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </InputGroup>
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                      <InputGroup.Text>
                        <FaEnvelope />
                      </InputGroup.Text>
                      <Form.Control
                        type="email"
                        name="email"
                        placeholder="Enter email"
                        required
                        value={formData.email}
                        onChange={handleChange}
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
                        name="password"
                        placeholder="Enter password"
                        required
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <InputGroup.Text
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </InputGroup.Text>
                    </InputGroup>
                  </Form.Group>

                  {error && (
                    <div className="text-danger mb-3 small">
                      {error}
                    </div>
                  )}

                  <div className="d-grid mb-3">
                    <Button variant="primary" type="submit">
                      Register
                    </Button>
                  </div>
                </Form>

                <p className="text-center mt-3 fs-6">
                  Already have an account?{' '}
                  <Link to="/login" className="text-decoration-none">
                    Login here
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

export default Register;
