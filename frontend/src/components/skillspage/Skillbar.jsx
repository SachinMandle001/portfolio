import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar';
import './skillbar.css';

const skills = [
   { name: 'Html', percent: 95 },
   { name: 'Css', percent: 90 },
   { name: 'Js', percent: 85 },
  { name: 'React.Js', percent: 95 },
  { name: 'Mongo DB', percent: 75 },
  { name: 'Express.Js', percent: 80 },
  { name: 'Node.Js', percent: 80 },
  { name: 'Bootstrap', percent: 95 },
  { name: 'Git & Github', percent: 96 },
];

const Skillbar = () => {
  return (
    <Container className='px-3'>
      <h1 className='text-center orangetext mb-5'>My Skills</h1>
      <Row className='ogborder rounded-5 py-4' data-aos="zoom-in" data-aos-duration="1000">
        {skills.map((skill, index) => (
          <Col sm={12} md={6} key={index} className='my-4'>
            <div>
              <h5>{skill.name}</h5>
              <div className='d-flex flex-wrap align-items-center gap-5'>
                {skill.percent}%
                <ProgressBar
                  className='w-75 gpb'
                  variant='success'
                  animated
                  now={skill.percent}
                  label={`${skill.percent}%`}
                />
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Skillbar;
