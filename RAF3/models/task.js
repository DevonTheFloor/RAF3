const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  id: { type: Number, require: false},
  nom: {type : String, require: true},
  ext: {typa: String, require: false},
  matiere: {type: String, require:true},
  categorie: {type: String, require:true},
  date_up: {type: String, require: false},
  com: {type: String, require: true}
})

module.exports = mongoose.model('task',taskSchema);