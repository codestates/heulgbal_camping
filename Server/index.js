require('dotenv').config();
const fs = require('fs');
const https = require('https');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: ['http://localhost:4000'],
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS', 'DELETE', 'PATCH'],
  }),
);

app.use(cookieParser());

app.get('/', (req, res) => {
  res.status(201).send('HEULGBAL CAMPING!');
});
app.get('/business', (req, res) => {
  res.status(201).send('Business User Page')
});
app.get('/user', (req, res) => {
  res.status(201).send('Customer User Page')
});
// routers declaration

const UserBusinessRouter  = require('./Routes/UserBusiness');
const UserCustomerRouter = require('./Routes/UserCustomer');
// const CampsitesRouter = require('/Routes/Campsites);

// express use routers

app.use('/business', UserBusinessRouter);
app.use('/user', UserCustomerRouter);
// app.use('/campsites', CampsitesRouter);

// app.use()

const HTTPS_PORT = process.env.HTTPS_PORT || 4000;

// 인증서 파일들이 존재하는 경우에만 https 프로토콜을 사용하는 서버를 실행합니다.
// 만약 인증서 파일이 존재하지 않는경우, http 프로토콜을 사용하는 서버를 실행합니다.
// 파일 존재여부를 확인하는 폴더는 서버 폴더의 package.json이 위치한 곳입니다.
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
