import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsArrowUpRightCircle } from "react-icons/bs";
import './project.css';

const Myprojcards = () => {
  return (
    <div style={{ marginTop: '150px' }} className="container bggray text-white p-5 rounded-5 mb-5">
      <h1 className='mb-2 text-center pb-3' data-aos="zoom-in" data-aos-duration="1000" >My <span className='orangetext'>Projects</span></h1>
     <p className='text-white fs-6 text-center' data-aos="zoom-in" data-aos-duration="1200">
      Want to explore more? Just click a card to see the project code or live demo!
      </p>
      <hr className='my-3 ' />
      <Row xs={1} md={2} lg={3} className="g-4 my-3 pt-3 mb-5">

        {/* Todo App */}
        <Col data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <a href="https://sachin-rtk-todoweb.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <Card className='rounded-5 bgblured h-100'>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Todo App</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  MERN stack ToDo app with Redux for state management. Create, edit, and delete tasks with a responsive interface.
                </Card.Text>
                <Card.Img variant="top" src="./todo.jpeg" className='service-img rounded-5' />
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Travel App */}
        <Col data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
          <a href="https://github.com/SachinMandle001/Travelweb" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <Card className='rounded-5 bgblured h-100'>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Travel App</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  Responsive travel website frontend designed using HTML, CSS, and Bootstrap. Showcases destinations, packages, and a modern layout.
                </Card.Text>
                <Card.Img variant="top" src="./travel.jpeg" className='service-img rounded-5' />
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Practo Clone */}
        <Col data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700">
          <a href="https://github.com/SachinMandle001/practo_clone " target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <Card className='rounded-5 bgblured h-100'>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Practo Clone App</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  Practo clone frontend built with React and React-Bootstrap. Features include responsive design, appointment sections, and service listings.
                </Card.Text>
                <Card.Img variant="top" src="./practo.jpeg" className='service-img rounded-5' />
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Scope Clone */}
        <Col data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
          <a href="https://github.com/SachinMandle001/scope_clone" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <Card className='rounded-5 bgblured h-100'>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Scope Clone App</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  Scope University frontend clone built with React and Bootstrap. Features responsive design, course listings, and clean navigation.
                </Card.Text>
                <Card.Img variant="top" src="./scope.jpeg" className='service-img rounded-5' />
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Weather App */}
        <Col data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
          <a href="https://github.com/SachinMandle001/weather_app" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <Card className='rounded-5 bgblured h-100'>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Weather App</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  Weather app built with React and React-Bootstrap. Displays real-time weather information for Bhopal, including temperature, humidity, and conditions.
                </Card.Text>
                <Card.Img variant="top" src="./weather.jpeg" className='service-img rounded-5' />
              </Card.Body>
            </Card>
          </a>
        </Col>

        {/* Simple Todo App */}
        <Col data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700">
          <a href="https://sachin-todowebapp.onrender.com/" target="_blank" rel="noopener noreferrer" className="text-decoration-none">
            <Card className='rounded-5 bgblured h-100'>
              <Card.Body className='text-light'>
                <Card.Title className='ctitle'>
                  <h3 className='d-flex justify-content-between px-2'>
                    <span>Todo App</span>
                    <BsArrowUpRightCircle className='titlelogo' />
                  </h3>
                </Card.Title>
                <hr />
                <Card.Text>
                  MERN stack ToDo app with create, edit, and delete features. Built with a responsive interface for task management.
                </Card.Text>
                <Card.Img variant="top" src="./simpletodo.jpeg" className='service-img rounded-5' />
              </Card.Body>
            </Card>
          </a>
        </Col>

      </Row>
    </div>
  );
};

export default Myprojcards;
