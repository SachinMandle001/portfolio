import React, { useState, useEffect } from 'react';
import './cslides.css';
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiRedux,
  SiMongodb,
  SiExpress,SiReactbootstrap 
} from 'react-icons/si';

const techStack = [
  { icon: <FaHtml5 color="#e44d26" size={100} />, name: 'HTML5' },
  { icon: <FaCss3Alt color="#264de4" size={100} />, name: 'CSS3' },
  { icon: <FaJs color="#f0db4f" size={100} />, name: 'JavaScript' },
  { icon: <FaBootstrap color="#7952B3" size={100} />, name: 'Bootstrap' },
  { icon: <FaReact color="#61DBFB" size={100} />, name: 'React' },
  { icon: <SiReactbootstrap color="#61DBFB" size={100} />, name: 'ReactBootstrap' },
  { icon: <SiRedux color="#764ABC" size={100} />, name: 'Redux' },
  { icon: <SiExpress color="#000000" size={100} />, name: 'Express' },
  { icon: <FaNodeJs color="#68a063" size={100} />, name: 'Node.js' },
  { icon: <SiMongodb color="#4DB33D" size={100} />, name: 'MongoDB' },
];

function Cardslides() {
  const [current, setCurrent] = useState(1);

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? techStack.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === techStack.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === techStack.length - 1 ? 0 : prev + 1));
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='bggray text-center' style={{ marginTop: '70px' }}>
      <h1 className='pt-5 orangetext' data-aos="zoom-in" >Technologies I Work With</h1>
      <p className='text-white fs-6' data-aos="fade-up" data-aos-duration="1500" >
        Here are some tools and technologies I regularly use to build modern, scalable web applications.
      </p>

      <div className="slider-wrapper bggray">
        <button className="nav-arrow left" onClick={prevSlide}>
          &#10094;
        </button>

        <div className="slider">
          {techStack.map((tech, index) => {
            let position = "nextSlide";
            if (index === current) {
              position = "activeSlide";
            } else if (
              index === current - 1 ||
              (current === 0 && index === techStack.length - 1)
            ) {
              position = "prevSlide";
            }

            return (
              <div className={`slide ${position}`} key={index}>
                <div className="p-5">{tech.icon}</div>
              </div>
            );
          })}
        </div>

        <button className="nav-arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
}

export default Cardslides;
