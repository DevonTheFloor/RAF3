const http = require('http');
const app = require('./app');
app.set('port',process.env.PORT ||4444);
const server = http.createServer(app);
console.log('Connexion: ok, ecoute port 80 (j\'espere)');
server.listen(process.env.PORT || 4444);