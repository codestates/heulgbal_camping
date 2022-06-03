const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();
app.set("port", process.envPORT || 4000);