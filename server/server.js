const express = require('express');
const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const EmissionController = require('./emission/emissions');
const ChaineController = require('./chaine/chaine');
const UpdatedVideoController = require('./updated_video/updatedVideo');

const multer = require('multer');
const helmet = require('helmet');

const app = express();

const pool = new Pool({
  user: 'user',
  host: 'localhost',
  database: 'mybd',
  password: 'user',
  port: '5432'
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './telechargement'); 
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); 
  }
});

const upload = multer({ storage });

app.post('/api/upload',  upload.single('video'), (req, res) => {
  console.log(`Video uploaded: ${req.file.filename}`)
  })

app.use(express.static('videos'));

app.use(helmet());

helmet.contentSecurityPolicy({
  connectSrc: ["'self'", 'http://localhost:3000', 'https://unpkg.com'],
})

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin','*')
  res.setHeader('Cross-Origin-Resource-Policy','*')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(express.json()); 

app.get('/emissions', EmissionController.getAll);
app.get('/emissions/:id', EmissionController.getById);
app.get('/emissions/chaine/:chaine_id', EmissionController.getByChaineId);
app.post('/emissions', EmissionController.create);
app.put('/emissions/:id', EmissionController.update);
app.delete('/emissions/:id', EmissionController.delete);

app.get('/chaines', ChaineController.getAll);
app.get('/chaines/:id', ChaineController.getById);
app.post('/chaines', ChaineController.create);
app.put('/chaines/:id', ChaineController.update);
app.delete('/chaines/:id', ChaineController.delete);

app.get('/updated_videos', UpdatedVideoController.getAll);
app.get('/updated_videos/:id', UpdatedVideoController.getById);
app.post('/updated_videos', UpdatedVideoController.create);
app.get('/videos/:filename', UpdatedVideoController.getVideoByName);
app.get('/videos', UpdatedVideoController.getUpdatedVideos);


app.listen(3100, () => {
    console.log('Le serveur est en cours d\'écoute sur le port 3100');
});

