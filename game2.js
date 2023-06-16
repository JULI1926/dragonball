var canvas = document.getElementById('gokusale');
var c = canvas.getContext('2d');

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

// Llama a resizeCanvas() cuando se cargue la página y cuando cambie el tamaño de la ventana
window.addEventListener('load', resizeCanvas);
window.addEventListener('resize', resizeCanvas);

// Crear un array vacío
var images = [];
var images2 = [];
images.length = 6;
images2.length = 10;

function muevegoku() {
  for (var i = 0; i < images.length - 1; i++) {
    images[i] = new Image();
    images[i].src = 'img/GOKU SALIDA/' + i.toString() + '.png';
  }
}

function muevegokuret() {
  for (var i = 6; i >= 0; i--) {
    images[i] = new Image();
    images[i].src = 'img/GOKU SALIDA/' + i.toString() + '.png';
  }
}

function muevefreezer() {
  for (var j = 0; j < images2.length; j++) {
    images2[j] = new Image();
    images2[j].src = 'img/Freezer Salida' + j.toString() + '.png';
  }
}

function muevefreezerret() {
  for (var j = 10; j >= 0; j--) {
    images2[j] = new Image();
    images2[j].src = 'img/Freezer Salida/' + j.toString() + '.png';
  }
}

function salenrivals(){

muevegoku();
muevegokuret();
muevefreezer();
muevefreezerret();
}

salenrivals();

var i = 0;
var j = 0;

setInterval(function () {
  c.clearRect(0, 0, canvas.width, canvas.height);
  
  // Ajustar las coordenadas y dimensiones según el tamaño del canvas
  var gokuX = canvas.width * 0.2;
  var gokuY = canvas.height * 0.45;
  var gokuWidth = canvas.width * 0.2;
  var gokuHeight = canvas.height * 0.2;
  
  var freezerX = canvas.width * 0.7;
  var freezerY = canvas.height * 0.45;
  var freezerWidth = canvas.width * 0.2;
  var freezerHeight = canvas.height * 0.25;

  c.drawImage(images[i], gokuX, gokuY, gokuWidth, gokuHeight);
  c.drawImage(images2[j], freezerX, freezerY, freezerWidth, freezerHeight);

  i++;
  j++;

  if (i >= images.length) {
    i = 0;
  }

  if (j >= images2.length) {
    j = 0;
  }
}, 200);

function selataq(){
  var resultadoElement = document.getElementById("pidetipataq");
  resultadoElement.innerText = "¡Selecciona un Tipo de Ataque!";
}








