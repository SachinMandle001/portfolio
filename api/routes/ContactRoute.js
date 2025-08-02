const express = require("express");
const ContactRouter = express.Router();
const nodemailer = require("nodemailer");
// const User = require('../models/User'); // Not used in this file, you can remove if not needed

// ✅ Nodemailer transport config
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "sachinmandle2001@gmail.com",
    pass: "pypo jdis bidy cpjo",
  },
});

ContactRouter.post("/", (req, res) => {
  const { name, email, message, subject } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`, // Shows sender name in Gmail
    to: "sachinmandle2001@gmail.com", // Your email to receive messages
    subject: subject,
    text: `
Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}
    `,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error("❌ Error sending email:", err);
      return res
        .status(500)
        .json({ success: false, message: "Failed to send email" });
    }
    console.log("✅ Email sent:", info.response);
    res.json({ success: true, message: "Email sent successfully" });
  });
});

module.exports = ContactRouter;
