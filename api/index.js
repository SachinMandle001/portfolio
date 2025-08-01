const path=require('path')
const dotenv=require('dotenv')
dotenv.config()
const express= require('express')
const cors = require('cors');
const app= express()
app.use(cors())
app.use(express.static(path.join(__dirname,'dist')))
const connectDB= require('./db')
connectDB()
const router = require('./routes/userRouter')
app.use(express.json())
const User=require('./models/User')
app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname,'dist/index.html'))
})



app.use('/user',router)

app.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.json({ success: false, message: 'Email not found' });

    if (user.password !== password) {
      return res.json({ success: false, message: 'Incorrect password' });
    }

    res.json({ success: true, message: 'Login successful', user });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Server error', error: err.message });
  }
});


app.listen(process.env.PORT,()=>{
    console.log('running on port '+process.env.PORT);    
})

module.exports=(req,res)=>app(req,res);