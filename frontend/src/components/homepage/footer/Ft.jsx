import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaPhoneAlt,
  FaEnvelope
} from 'react-icons/fa';
import { HiLocationMarker } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './ft.css';

const Ft = () => {
  return (
    <footer className="bgft text-white pt-4 pb-3 rounded-top-5 mt-5">
      <div className="container">
        <h1 className="text-center text-md-start py-2" data-aos="fade-right"  data-aos-duration="1000">
          Let's <span className="orangetext">Connect</span> there
        </h1>
        <hr className="mb-4" />

        <div className="row gy-4">

          {/* 👤 Profile Section - Wide */}
          <div className="col-12 col-md-6 col-lg-6 ps-2">
            <div className="d-flex flex-column flex-md-row align-items-start mt-3">
              <div>
                <h2>
              <img src="smlogo.png" alt="s" className=' me-1' width={'82px'} />
                  SACHIN
                </h2>
                <p className="small pt-3">
                  MERN Stack Developer with a strong foundation in full-stack web development. Passionate about crafting responsive, user-friendly web apps and always open to new learning opportunities.
                </p>
              </div>
            </div>
            <div className="mt-3 d-flex justify-content-center justify-content-md-start flex-wrap gap-2">
              <a href="https://github.com/SachinMandle001" target="_blank" rel="noopener noreferrer" className="social-icon"><FaGithub /></a>
              <a href="https://www.linkedin.com/in/sachin-mandle-122094259/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaLinkedin /></a>
              <a href="https://www.facebook.com/sachin.mandle.210191/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaFacebookF /></a>
              <a href="https://www.instagram.com/___sachin786/" target="_blank" rel="noopener noreferrer" className="social-icon"><FaInstagram /></a>
            </div>
          </div>

          {/* 🌐 Navigation Section - Smaller */}
          <div className="col-4 col-md-2 col-lg-2 ps-3">
            <h6 className="orangetext">Navigation</h6>
            <ul className="list-unstyled mt-4">
              <li><Link to="/" className="text-white text-decoration-none ftlink">Home</Link></li>
              <li><Link to="/about" className="text-white text-decoration-none ftlink">About Us</Link></li>
              <li><Link to="/skills" className="text-white text-decoration-none ftlink">Skills</Link></li>
              <li><Link to="/projects" className="text-white text-decoration-none ftlink">Projects</Link></li>
              <li><Link to="/contact" className="text-white text-decoration-none ftlink">Contact Us</Link></li>
            </ul>
          </div>

          {/* 📞 Contact Section */}
          <div className="col-8 col-md-4 col-lg-4 ps-2">
            <h6 className="orangetext">Contact Us</h6>
            <ul className="list-unstyled mt-4 ftpop">
              <li><FaPhoneAlt className="me-1" /> +91 9171474340</li>
              <li className="d-flex align-items-center">
                <FaEnvelope className="me-2 flex-shrink-0" />
                <span className="text-break">sachinmandle2001@gmail.com</span>
              </li>
              <li><HiLocationMarker className="me-1" /> 335 Ishwar Nagar Bhopal, Madhya Pradesh 462039</li>
            </ul>
          </div>

        </div>

        <hr className="mt-5" />

        {/* 📄 Footer Bottom */}
        <div className="text-center mt-4">
          <small>
            &copy; 2025 Sachin All Rights Reserved. |{' '}
            <span className="text-decoration-none orangetext">User Terms & Conditions</span> |{' '}
            <span className="orangetext text-decoration-none">Privacy Policy</span>
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Ft;
