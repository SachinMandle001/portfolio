import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './topsec.css'
import { FaDownload } from "react-icons/fa";
import Card from 'react-bootstrap/Card';
import myResume from '../../../assets/SachinResume.pdf';



const Aboutsection = () => {
  return (
    <>
      <div className="container bggray text-white p-5 rounded-5" style={{ "margin-top": "150px" }}>
        <h1 className='text-center mb-4  ' data-aos="zoom-in">About <span className='orngetext'>Me</span></h1>
        <hr />

        <Container className='mt-5'>
          <Row xs={1} md={2} className=' mx-lg-5'  >
            <Col md={6} className='p-4 pt-0' >
              <div className='mt-3'>
                <h2 className='orngetext bold text-de text-center text-md-start'>Information About Me</h2>
                <hr />
                <img src="./mypic.jpg" alt="Sachin" className=" hero-img rounded-5 mt-2" data-aos="fade-up" data-aos-duration="1200" />

                <p className='text-white mt-4 fs-6 lh-lg' data-aos="fade-right" data-aos-duration="1200">
                  I’m Sachin Mandle, a passionate and aspiring Full Stack Developer with a strong foundation in Computer Science and Engineering, having completed both B.Tech and Diploma in CSE. As a fresher in the tech industry, I specialize in the MERN stack and have a keen interest in building responsive, user-friendly web applications that deliver seamless digital experiences.Driven by curiosity and a love for problem-solving, I’m constantly learning and evolving in the ever-changing landscape of web development. From frontend design to backend architecture, I enjoy working across the full stack to bring ideas to life. I’m excited about using technology to solve real-world problems and contribute to innovations that could positively impact the future of humanity.</p>

                <div className="text-center text-md-start my-4" data-aos="fade-right" data-aos-duration="1200">
                  <a
                    href={myResume}
                    download="Sachin-Mandle-Resume.pdf"
                    className="orngebtn text-white p-2 rounded-4 border-0 px-3 text-decoration-none d-inline-block"
                    
                  >
                    Download CV <FaDownload />
                  </a>
                </div>
              </div>
            </Col>
            <Col md={6} className='d-flex justify-content-center  '>
              <Row xs={1} sm={1} md={1} lg={1} className="g-4  mb-5">

                {/* Frontend Design */}
                <Col data-aos="fade-left" data-aos-duration="1200">
                  <Card className='rounded-5 bgblured h-100'>
                    <Card.Body className='text-light'>
                      <Card.Title className='ctitle'>
                        <h3 className='px-2'>
                          <span>Frontend Web</span>
                        </h3>
                      </Card.Title>
                      <hr />
                      <Card.Text>
                        <ul className='fs-6'>
                          <li className="list-group-item">Html</li>
                          <li className="list-group-item">Css</li>
                          <li className="list-group-item">JavaScript</li>
                          <li className="list-group-item">Bootstrap</li>
                          <li className="list-group-item">React.Js</li>
                          <li className="list-group-item">React-Bootstrap</li>
                        </ul>

                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* Backend Design */}
                <Col data-aos="fade-left" data-aos-duration="1200" data-aos-delay="300">
                  <Card className='rounded-5 bgblured h-100'>
                    <Card.Body className='text-light'>
                      <Card.Title className='ctitle'>
                        <h3 className='px-2'>
                          <span>Backend Web</span>
                        </h3>
                      </Card.Title>
                      <hr />
                      <Card.Text>
                        <ul className='fs-6'>
                          <li className="list-group-item">Node.Js</li>
                          <li className="list-group-item">Express.Js</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

                {/* DB */}

                <Col data-aos="fade-left" data-aos-duration="1200" data-aos-delay="500">
                  <Card className='rounded-5 bgblured h-100'>
                    <Card.Body className='text-light'>
                      <Card.Title className='ctitle'>
                        <h3 className='px-2'>
                          <span>Database</span>
                        </h3>
                      </Card.Title>
                      <hr />
                      <Card.Text>
                        <ul className='fs-6'>
                          <li className="list-group-item">MongoDB</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>


                {/* version control */}
                <Col data-aos="fade-left" data-aos-duration="1200" data-aos-delay="700">
                  <Card className='rounded-5 bgblured h-100'>
                    <Card.Body className='text-light'>
                      <Card.Title className='ctitle'>
                        <h3 className='px-2'>
                          <span>Version Control</span>
                        </h3>
                      </Card.Title>
                      <hr />
                      <Card.Text>
                        <ul className='fs-6'>
                          <li className="list-group-item">Git</li>
                          <li className="list-group-item">GitHub</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>

              </Row>
            </Col>
          </Row>
        </Container>

      </div>
    </>
  )
}

export default Aboutsection