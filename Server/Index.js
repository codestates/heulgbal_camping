require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');
const app = express();
const { sequelize } = require('./models');

const controllers = require('./Controllers/Index');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
  }),
);

sequelize
  .sync({ force: true })
  .then(() => {
    console.log('데이터베이스 연결됨.');
  })
  .catch(err => {
    console.error(err);
  });

app.get('/', (req, res) => {
  res.status(201).send('Hello World');
});

app.use(cookieParser());
app.use('/', controllers);

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

let server;
if (fs.existsSync('./key.pem') && fs.existsSync('./cert.pem')) {
  const privateKey = fs.readFileSync(__dirname + '/key.pem', 'utf8');
  const certificate = fs.readFileSync(__dirname + '/cert.pem', 'utf8');
  const credentials = { key: privateKey, cert: certificate };

  server = https.createServer(credentials, app);
  server.listen(HTTPS_PORT, () =>
    console.log(HTTPS_PORT, 'https server runnning'),
  );
} else {
  server = app.listen(HTTPS_PORT, () =>
    console.log(HTTPS_PORT, 'http server runnning'),
  );
}
module.exports = server;
