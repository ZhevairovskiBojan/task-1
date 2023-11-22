const express = require('express');
const jwt = require ("express-jwt");

const akademijaHandler = require('./handlers/akademijaHandler');
const kursHandler = require('./handlers/kursHandler');
const viewHandler = require('./handlers/viewHandler');
const authHandler = require('./handlers/authHandler')


const DB = require('./pkg/db/index');

const app = express();

DB.database();

app.set('view engine', 'ejs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(jwt.expressjwt({
  algorithms: ["HS256"],
  secret: process.env.JWT_SECRET,
  }).unless({
    path: [
      '/api/v1/signup', 'api/v1/login', '/test', '/welcome',
    ],
  })
  );

app.post('/api/v1/signup', authHandler.signup);
app.post('/api/v1/login', authHandler.login);

app.get('/api/akademija', akademijaHandler.allAcademys);
app.get('/api/akademija/:id', akademijaHandler.oneAcademy);

app.post('/api/akademija', akademijaHandler.createAcademy);
app.patch('/api/akademija/:id', akademijaHandler.updateAcademy);
app.delete('/api/akademija/:id', akademijaHandler.deleteAcademy);


app.get('/api/kurs', kursHandler.SiteKusevi);
app.get('/api/kurs/:id', kursHandler.oneKurs);

app.post('/api/kurs', kursHandler.createKurs);
app.patch('/api/kurs/:id', kursHandler.updateKurs);
app.delete('/api/kurs/:id', kursHandler.deleteKurs);


app.get('/test', viewHandler.Website);
app.get('/welcome', kursHandler.SiteKusevi);


app.listen(process.env.PORT, err => {
  if (err) return console.log(err);
  console.log("The service is online");
});



