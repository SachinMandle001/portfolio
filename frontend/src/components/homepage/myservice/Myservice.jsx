import React from 'react';
import './myservice.css';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsArrowUpRightCircle } from "react-icons/bs";

const Myservice = () => {
  
  return (
    <>
      <div className="container bggray text-white p-5 rounded-5 my-5">
        <h1 className='mb-2' data-aos="fade-right" data-aos-duration="1000">My <span className='orangetext'>Services</span></h1>
        <hr className='my-3 ' />
        <Row xs={1} md={2} lg={3} className="g-4 my-2 mb-5">

          {/* Frontend Design */}
          <Col data-aos="fade-up"data-aos-duration="1200" >
            <Card className='rounded-5 bgblured h-100'>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Frontend Design</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  I design responsive, modern, and clean UIs using HTML, CSS, Bootstrap, and React to ensure a smooth user experience.
                </Card.Text>
                <Card.Img variant="top" src="./appdesign.jpg" className=' service-img rounded-5 card-img-hover' />
              </Card.Body>
            </Card>
          </Col>

          {/* Backend Design */}
          <Col data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <Card className='rounded-5 bgblured h-100'>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Backend Design</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  I develop powerful and scalable backends using Node.js, Express, and MongoDB, focusing on performance and security.
                </Card.Text>
                <Card.Img variant="top" src="./webdesign.jpg" className='service-img rounded-5 card-img-hover' />
              </Card.Body>
            </Card>
          </Col>

          {/* Git & GitHub */}
          <Col data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
            <Card className='rounded-5 bgblured h-100 '>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Git & GitHub</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  I manage version control efficiently using Git and GitHub, enabling collaboration, tracking changes, and maintaining clean codebases.
                </Card.Text>
                <Card.Img variant="top" src="./landingpg.jpg" className='service-img rounded-5 card-img-hover' />
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  )
}

export default Myservice;
