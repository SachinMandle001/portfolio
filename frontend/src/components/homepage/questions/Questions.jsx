import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './questions.css'

const Questions = () => {
  return (
    <>
 <div className="container my-5">
  <h1 className="text-center" data-aos="zoom-in" data-aos-duration="1000">
    Questions? <span className="orangetext">Look Here.</span>
  </h1>
  <p className="mt-2 text-center text-muted fs-6">
    Find answers about me and how I work.
  </p>

  <div className=" p-4  mt-4" data-aos="fade-up"data-aos-duration="1200">
    <Accordion defaultActiveKey="0" className="custom-accordion ">
      <Accordion.Item eventKey="0 ">
        <Accordion.Header>What technologies are used in your projects ?</Accordion.Header>
        <Accordion.Body>
          My projects are built using the MERN stack: MongoDB, Express.js, React.js, and Node.js. They are styled with Bootstrap and custom CSS.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="1">
        <Accordion.Header>Can I view the code of your projects ?</Accordion.Header>
        <Accordion.Body>
          Yes! All project source code is available on my GitHub, linked in the Projects section of my portfolio.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>Do you work on freelance or custom projects ?</Accordion.Header>
        <Accordion.Body>
          Absolutely! I'm available for freelance and collaborative work. You can contact me directly through the form or social links.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>Can i download your Resume/CV for information ?</Accordion.Header>
        <Accordion.Body>
        Certainly! You can download my resume/CV directly from my website. It provides a comprehensive overview of my education, work experience, and design achievements.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  </div>
</div>



    </>
  )
}

export default Questions