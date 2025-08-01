import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './skills.css';
import { FaCode,FaServer,FaDatabase,FaGitAlt} from "react-icons/fa";
import { MdDevices } from "react-icons/md";
import { AiOutlineLayout } from "react-icons/ai";

const Skills = () => {
  return (
    <>
      <div className="container bggray text-white p-5 rounded-5 my-5">
        <h1 className='text-center' data-aos="zoom-in">I Specialize In A</h1>
<h1 className='orangetext text-center' data-aos="fade-up" data-aos-duration="1000">Range Of Skills</h1>

        <hr className='my-3' />

        <Row xs={1} md={3} className="g-4 my-3 mb-5">

          {/* Front-end Development */}
          <Col className="d-flex"  data-aos="fade-up" data-aos-duration="1200">
            <Card className='rounded-5 bgwhite equal-card' >
              <Card.Body>
                <h1 className='text-center'><FaCode /></h1>
                <Card.Title className='ctitle text-center'>Front-end Development</Card.Title>
                <hr />
                <Card.Text className='text-center'>
                  I am an expert in HTML5, CSS3, JavaScript (ES6+), React, Bootstrap.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Back-end Development */}
          <Col className="d-flex"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="300">
            <Card className='rounded-5 bgwhite equal-card'>
              <Card.Body>
                <h1 className='text-center'><FaServer /></h1>
                <Card.Title className='ctitle text-center'>Back-end Development</Card.Title>
                <hr />
                <Card.Text className='text-center'>
                  I am an expert in Node.js, Express.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Database Management */}
          <Col className="d-flex"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="500">
            <Card className='rounded-5 bgwhite equal-card'>
              <Card.Body>
                  <h1 className='text-center'><FaDatabase /></h1>
                <Card.Title className='ctitle text-center'>Database Management</Card.Title>
                <hr />
                <Card.Text className='text-center'>
                  I am an expert in MySQL, MongoDB.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Version Control */}
          <Col className="d-flex"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="700">
            <Card className='rounded-5 bgwhite equal-card'>
              <Card.Body >
                  <h1 className='text-center'><FaGitAlt /></h1>
                <Card.Title className='ctitle text-center'>Version Control</Card.Title>
                <hr />
                <Card.Text className='text-center'>
                  I am an expert in Git, GitHub Providing the best.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Responsive Design */}
          <Col className="d-flex"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="900">
            <Card className='rounded-5 bgwhite equal-card'>
              <Card.Body>
                  <h1 className='text-center'><MdDevices /></h1>
                <Card.Title className='ctitle text-center'>Responsive Design</Card.Title>
                <hr />
                <Card.Text className='text-center'>
                  Creating visually appealing and functional websites across devices.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* UI/UX Design */}
          <Col className="d-flex"  data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
            <Card className='rounded-5 bgwhite equal-card'>
              <Card.Body >
                <h1 className='text-center'><AiOutlineLayout/></h1>
                <Card.Title className='ctitle text-center'>UI/UX Design</Card.Title>
                <hr />
                <Card.Text className='text-center'>
                Crafting intuitive interfaces through wireframes, prototypes, and user flow design.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </div>
    </>
  );
};

export default Skills;
