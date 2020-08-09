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
  Task.find({matiere: "upload"})
    .then(tasks=>res.status(200).json(tasks))
    .catch(error => res.status(400).json({error}));
});

app.get('/eng/', (req, res, next) => {
  Task.find({matiere: "anglais"})
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(400).json({error}));
});

app.get('/french/', (req, res, next) => {
  Task.find({matiere: "francais"})
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(400).json({
      error
    }));
});

app.get('/histoire/', (req, res, next) => {
  Task.find({matiere: "histoire"})
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(400).json({
      error
    }));
});

app.get('/maths/', (req, res, next) => {
  Task.find({matiere: "maths"})
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(400).json({
      error
    }));
});

app.get('/physique/', (req, res, next) => {
  Task.find({matiere: "physique"})
    .then(tasks => res.status(200).json(tasks))
    .catch(error => res.status(400).json({
      error
    }));
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
    ...req.body
  });
  devoir.save()
  .then(()=> res.redirect('index.html'))
  .catch(error=>res.status(400).json({error}));
});


/*app.get('raf3/ecole/doc/phy/cours/',(req,res,next)=>{
  let coursPhy= ["elec-chap10.pdf"];
  function affdoc(){
    let liste = document.getElementById('liste');
    for(i=0;i<coursPhy.length;i++){
      let lien = document.createElement('a'):
      lien.href = coursPhy[i];
      let docu = document.createElement('li');
      docu.textContent= coursPhy[i];
    }
    
  }
  
  
});*/

module.exports = app;
