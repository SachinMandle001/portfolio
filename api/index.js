const path = require("path");
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

app.use(express.static(path.join(__dirname, "dist")));
const connectDB = require("./db");
connectDB();
const router = require("./routes/userRouter");
app.use(express.json());

let SECRET;

try {
  SECRET = process.env.JWT_SECRET;
  if (!SECRET) throw new Error("JWT_SECRET missing");
} catch (error) {
  console.error("JWT_SECRET Error:", error.message);
  process.exit(1);
}

const User = require("./models/User");

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "dist/index.html"));
});

const ContactRouter = require("./routes/ContactRoute");
app.use("/send", ContactRouter);

app.use("/user", router);

app.post('/login', async (req, res) => {
  try {
     const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: 'Unauthorized' });
  const valid = await bcrypt.compare(password, user.passwordHash);
  if (!valid) return res.status(401).json({ message: 'Unauthorized' });
  const token = jwt.sign({ email: user.email }, SECRET, { expiresIn: '1h' });
  res.json({ token ,success:true });
} catch (error) {
    res.status(500).json({success:false, message:"Server Error", error:error.message})
  }
})

app.listen(process.env.PORT, () => {
  console.log("running on port " + process.env.PORT);
});

module.exports = (req, res) => app(req, res);
