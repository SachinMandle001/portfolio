import React from 'react'
import Ft from '../homepage/footer/Ft'
import Nvbar from '../homepage/nav/Nvbar'
import { FaFilePdf } from "react-icons/fa";   
import './edu.css'
import Btech_Marksheet from '../../../src/assets/doc/btech.pdf';
import Diploma_Marksheet from '../../../src/assets/doc/diploma.pdf';
import tenth from '../../../src/assets/doc/10th.pdf';


const Edudetails = () => {
  return (
    <>
      <Nvbar/>
<div className="container-fluid bgcream pb-5 pt-3">
  <div
    style={{ marginTop: "130px" }}
    className="container bggray text-white p-5 rounded-5"
  >
    <h1
      className="mb-1 text-center pb-2"
      data-aos="zoom-in"
      data-aos-duration="1000"
    >
      My <span className="orangetext">Education</span>
    </h1>
    <p
      className="text-white fs-6 text-center"
      data-aos="zoom-in"
      data-aos-duration="1200"
    >
      Here is a summary of my academic background.
    </p>
    <hr className="my-3" />

    {/* Responsive Table */}
    <div className="table-responsive" data-aos="fade-up" data-aos-duration="1200">
      <table className="table table-bordered text-center align-middle custom-edu-table">
        <thead data-aos="fade-down" data-aos-duration="1000">
          <tr>
            <th>Qualification</th>
            <th>Institute</th>
            <th>University/Board</th>
            <th>Duration</th>
            <th>CGPA / %</th>
            <th>View</th>
          </tr>
        </thead>
<tbody>
  <tr>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="0">
      B.Tech in Computer Science & Engineering
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
      Technocrats Institute of Technology, Bhopal
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
      RGPV
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
      2021 – 2024
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
      CGPA: 7.85
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
      <a 
        href={Btech_Marksheet}
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-sm btn-outline-light d-flex align-items-center justify-content-center gap-2"
      >
        <FaFilePdf color="#FF6000" size={16} /> View
      </a>
    </td>
  </tr>

  <tr>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="0">
      Diploma in Computer Science & Engineering
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
      S.V. Polytechnic College, Bhopal
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
      RGPV
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
      2018 – 2021
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
      CGPA: 7.59
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
      <a 
        href={Diploma_Marksheet}
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-sm btn-outline-light d-flex align-items-center justify-content-center gap-2"
      >
        <FaFilePdf color="#FF6000" size={16} /> View
      </a>
    </td>
  </tr>

  <tr>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="0">
      10th Grade
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="100">
      Govt. Subhash H.S. Excellence School, Bhopal
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="200">
      MP Board
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="300">
      2017 – 2018
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="400">
      91.4%
    </td>
    <td data-aos="fade-right" data-aos-duration="800" data-aos-delay="500">
      <a 
        href={tenth}
        target="_blank" 
        rel="noopener noreferrer" 
        className="btn btn-sm btn-outline-light d-flex align-items-center justify-content-center gap-2"
      >
        <FaFilePdf color="#FF6000" size={16} /> View
      </a>
    </td>
  </tr>
</tbody>

      </table>
    </div>
  </div>
</div>


      <Ft/>
    </>
  )
}

export default Edudetails
