const express = require('express');
const multer = require('multer');
const serveStatic = require('serve-static');
const ejs = require('ejs');
let path = require('path');
let Task = require('./models/task');
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://devon:Mot2Passe@cluster1-0yflp.mongodb.net/travil?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

/*app.use(serveStatic('raf3', { 'index': ['index.html', 'index.htm'] }));*/
app.use(express.static(__dirname + '/raf3'));
 

app.get('/nimp/',(req,res,next)=>{
  Task.find({matiere: "upload"}).sort({date_up:1})
    .then(tasks=>res.status(200).json(tasks))
    .catch(error => res.status(404).json({error}));
});

app.get('/eng/', (req, res, next) => {
  Task.find({matiere: "anglais"}).limit(5).sort({date_up:1})
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(404).json({error}));
});

app.get('/french/', (req, res, next) => {
  Task.find({matiere: "francais"}).limit(5)
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(404).json({
      error
    }));
});

app.get('/histoire/', (req, res, next) => {
  Task.find({matiere: "histoire"}).limit(5)
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(404).json({
      error
    }));
});

app.get('/geo/',(req,res,next)=>{
  Task.find({matiere: "geo"}).limit(5)
  .then(()=>res.status(200).json({tasks}))
  .catch(error => {res.status(404).json({error})})
});

app.get('/maths/', (req, res, next) => {
  Task.find({matiere: "maths"}).limit(5)
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(404).json({
      error
    }));
});

app.get('/physique/', (req, res, next) => {
  Task.find({matiere: "physique"}).limit(5)
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(404).json({
      error
    }));
});

app.get('/chimie/',(req,res,next)=>{
  Task.find({matiere:"chimie"}).sort({_id:1}).limit(5)
  .then(()=>{res.status(200).json({task})})
  .catch(error => res.status(404).json({error}))
});

let storage = multer.diskStorage({
  destination: 'raf3/UPIMG/',
  filename: function (req, file, reName) {
    reName(null, file.originalname)
  }
});
var upload = multer({
  storage: storage
});

app.post('/', upload.single('file'), (req, res, next) => {
  let devoir = new Task({
    nom: req.file.originalname,
    date_up: Date.now(),
    ...req.body
  });
  devoir.save()
  .then(()=> res.redirect('index.html'))
  .catch(error=>res.status(400).json({error}));
});


module.exports = app;
