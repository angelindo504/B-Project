var express = require('express');
var app = express();
var faker = require('faker');
var _ = require('lodash');

var generarUsuario = function(){
  var randomName = faker.name.findName();
  var randomEmail = faker.internet.email();
  var randomImage = faker.image.avatar();
  return {
    nombre: randomName,
    email: randomEmail,
    imagen: randomImage
  }

}
var generarNuevosUsuarios=function(){
  var randomID = faker.random.uuid();
  var randomName = faker.name.findName();
  var randomContenido = faker.lorem.paragraph();
  var randomDate=faker.date.recent();
  var randomImage = faker.image.avatar();
  return {
    id:randomID,
    nombre: randomName,
    contenido: randomContenido,
    fecha: randomDate,
    imagen: randomImage
  }

}

app.get('/', function (req, res) {
  res.send('Mi primer servidor!');
})

app.get('/friends', function (req, res) {
  var cantidad = _.random(5,10)
  var usuarios = _.times(cantidad, generarUsuario)
  res.json(usuarios);
})

app.get('/posts', function (req, res) {
  var cantidad = 4
  var lista_usuarios = _.times(cantidad, generarNuevosUsuarios)
  res.json(lista_usuarios);
})

app.get('/amigos', function (req, res) {
  res.send('Mis amigos');
})

app.listen(3000);