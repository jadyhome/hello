const AppRouter = require("./routes/AppRouter");
const PORT = process.env.PORT || 3001;
const express = require("express");
const app = express();
const path = require("path");

// Require Middleware
const logger = require("morgan");
const cors = require("cors");
const bodyParser = require("body-parser");
const { default: axios } = require("axios");
// Require Middleware

// Initialize Middleware
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "client", "build")));
// Initialize Middleware

app.disable("X-Powered-By");

app.get("/", (req, res) => res.send({ msg: "Server Working" }));
app.use("/api", AppRouter);

app.get("*", (req, res) =>
  res.sendFile(path.join(__dirname, "client", "build", "index.html"))
);

app.listen(PORT, () => console.log(`Server Started On Port: ${PORT}`));
