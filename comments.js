// Create web server
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { randomBytes } = require("crypto");
const axios = require("axios");

// Create web server
const app = express();
app.use(bodyParser.json());
app.use(cors());

// Create comments store
const