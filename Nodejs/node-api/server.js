const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o App
const app = express();
//permite enviar dados para a aplicação no formato .json, que é o mais utilizado
//para api rest
app.use(express.json());
//adiciona o CORS ao app, liberando acesso a api de todos os dominios
app.use(cors());

//iniciando o database
mongoose.connect('mongodb://localhost:27017/nodeapi', { 
  useUnifiedTopology: true,
  useNewUrlParser: true
});
requireDir('./src/models'); //utilizando o require-dir $npm install require-dir

//Rotas
/* 
.use recebe todo tipo de requisição, sendo que nesse caso toda vez que receber
uma requisição a partir da rota /api, ela será enviada para ./src/routes.js
*/
app.use('/api', require('./src/routes.js'));

app.listen(3001);
