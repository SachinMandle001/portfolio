import React, { useEffect } from 'react';
import './hero.css';
import { FaDownload } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';
import myResume from '../../../assets/SachinResume.pdf';


const Hero = () => {


  return (
    <>
      <div className="container-fluid mybody mt-5 pt-5">
        <div className="container pt-4 pb-2">
          <div className="row py-5">
            <div
              className="col-12 col-md-6 py-4 align-content-center"
              data-aos="fade-right"
            >
              <span className="border border-2 rounded-4 p-2 text-secondary fs-5 myft">Hello !</span>
              <h1 className='mt-4 orngetext'>I'm Sachin,</h1>
              <h1>
                <TypeAnimation
                  sequence={[
                    'MERN Developer ', 2000,
                    'Frontend Developer ', 2000,
                    'Backend Developer ', 2000,
                  ]}
                  wrapper="h1"
                  speed={50}
                  className="text-dark"
                  repeat={Infinity}
                />
              </h1>
              <p className='text-secondary mt-4 fs-6'>
                I'm a passionate MERN Stack Developer with strong hands-on experience building full-stack web applications using MongoDB, Express.js, React, and Node.js. As a fresher, I’m driven by curiosity, clean code, and a strong desire to solve real-world problems through technology.
              </p>
              <a
                href={myResume}
                download="Sachin-Mandle-Resume.pdf"
                className="orngebtn text-white p-2 rounded-4 border-0 px-3 text-decoration-none d-inline-block"
              >
                Download CV <FaDownload />
              </a>
            </div>

            <div
              className="col-12 col-md-6 d-flex justify-content-center align-items-center"
              data-aos="fade-up"
            >
              <img src="./mypic.jpg" alt="Sachin" className="hero-img rounded-5 mt-3" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
