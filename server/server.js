require('./config/db');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const path = require('path');
const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());

// Import Router
const tenderRouter = require("./routes/tenderRoutes");
const userRouter = require("./routes/userRoutes");
const contactRouter = require("./routes/contactRoutes");
const authRouter = require("./routes/authRoutes");
const paymentRouter = require("./routes/paymentRoutes");

// Routes
app.use("/apiTender/tenderdetails", tenderRouter);
app.use("/apiTender/userdetails", userRouter);
app.use("/apiTender", contactRouter);
app.use("/apiTender", authRouter);
app.use("/apiTender/payment", paymentRouter);

// Serve the React app for all other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});

// Start the server
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});