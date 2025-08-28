const express= require('express')
const router=express.Router()
const User=require('../models/User')
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
  const {name, email, password } = req.body;
 
  try {
     // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    //hash password
     const passwordHash = await bcrypt.hash(password, 1);

    const user = new User({name, email, passwordHash });
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error, please try again later' });  }
});


module.exports=router