import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import {
  FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from 'react-icons/fa';
import './mycontact.css';
import axios from 'axios';
import Swal from 'sweetalert2';

const Mycontact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });


  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('/send', formData);

      Swal.fire({
      title: 'Message Sent!',
      text: 'Thank you for reaching out. I’ll get back to you soon.',
      icon: 'success',
      confirmButtonText: 'OK',
      confirmButtonColor: '#FF6000',
      customClass: {
        popup: 'rounded-4'
      }
    }).then(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
    });

    } catch (error) {
      console.error(error);
      Swal.fire({
      title: 'Failed to Send!',
      text: 'Something went wrong. Please try again later.',
      icon: 'error',
      confirmButtonText: 'Retry',
      confirmButtonColor: '#FF6000',
      customClass: {
        popup: 'rounded-4'
      }
    });
    }
  };




  return (
    <div style={{ marginTop: '92px', paddingTop: '100px' }} className="contact-section pb-5 mybody" id="contact">
      <Container>
        <Row className="align-items-start">
          {/* Left Side */}
          <Col md={5} className="mb-4 ">
            <h2 className='text-center text-md-start' data-aos="fade-right" data-aos-duration="1300" data-aos-delay="300">
              Let’s <span className="highlight">Connect</span> &{' '}
              <span className="highlight">Collaborate</span>
            </h2>
            <img src="./contactus.png" alt="Sachin" className=" hero-img cimg rounded-5 mt-1" data-aos="zoom-in" data-aos-duration="1200" data-aos-delay="300" />

            <div className="mt-2 text-muted " data-aos="fade-down" data-aos-duration="1200" data-aos-delay="300">
              <p><FaEnvelope className="me-2 icon" /> sachinmandle2001@gmail.com</p>
              <p><FaPhoneAlt className="me-2 icon" /> +91 9171474340</p>
              <p><FaMapMarkerAlt className="me-2 icon" /> 335 Ishwar Nagar, Bhopal, Madhya Pradesh 462039</p>
            </div>
            <div className="mt-2 d-flex justify-content-center justify-content-md-start flex-wrap gap-2 align-items-center"  >
              <a href="https://github.com/SachinMandle001" target="_blank" rel="noopener noreferrer" className="social-icons"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sachin-mandle-122094259/" target="_blank" rel="noopener noreferrer" className="social-icons"><FaLinkedin /></a>
              <a href="https://www.facebook.com/sachin.mandle.210191/" target="_blank" rel="noopener noreferrer" className="social-icons"><FaFacebookF /></a>
              <a href="https://www.instagram.com/___sachin786/" target="_blank" rel="noopener noreferrer" className="social-icons"><FaInstagram /></a>
            </div>
          </Col>

          {/* Right Side - Form */}
          <Col md={7} data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300"  >
            <Form onSubmit={handleSubmit} className="contact-form formbg  rounded-5 mt-4 pb-4">
              <Form.Group className="mb-3 pt-2">
                <Form.Control type="text" placeholder="Full Name" name="name"
                  value={formData.name}
                  onChange={handleChange} className='rounded-3' required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className='rounded-3' required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Control type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className='rounded-3' placeholder="Subject" required />
              </Form.Group>
              <Form.Group className="mb-4">
                <Form.Control as="textarea"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className='rounded-3' rows={4} placeholder="Message" required />
              </Form.Group>

              <Button type="submit" className="send-btn">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mycontact;
