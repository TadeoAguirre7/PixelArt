var nombreColores = ['White', 'LightYellow',
  'LemonChiffon', 'LightGoldenrodYellow', 'PapayaWhip', 'Moccasin', 'PeachPuff', 'PaleGoldenrod', 'Bisque', 'NavajoWhite', 'Wheat', 'BurlyWood', 'Tan',
  'Khaki', 'Yellow', 'Gold', 'Orange', 'DarkOrange', 'OrangeRed', 'Tomato', 'Coral', 'DarkSalmon', 'LightSalmon', 'LightCoral', 'Salmon', 'PaleVioletRed',
  'Pink', 'LightPink', 'HotPink', 'DeepPink', 'MediumVioletRed', 'Crimson', 'Red', 'FireBrick', 'DarkRed', 'Maroon',
  'Brown', 'Sienna', 'SaddleBrown', 'IndianRed', 'RosyBrown',
  'SandyBrown', 'Goldenrod', 'DarkGoldenrod', 'Peru',
  'Chocolate', 'DarkKhaki', 'DarkSeaGreen', 'MediumAquaMarine',
  'MediumSeaGreen', 'SeaGreen', 'ForestGreen', 'Green', 'DarkGreen', 'OliveDrab', 'Olive', 'DarkOliveGreen', 'YellowGreen', 'LawnGreen',
  'Chartreuse', 'GreenYellow', 'Lime', 'SpringGreen', 'LimeGreen',
  'LightGreen', 'PaleGreen', 'PaleTurquoise',
  'AquaMarine', 'Cyan', 'Turquoise', 'MediumTurquoise', 'DarkTurquoise', 'DeepSkyBlue',
  'LightSeaGreen', 'CadetBlue', 'DarkCyan', 'Teal', 'Steelblue', 'LightSteelBlue', 'Honeydew', 'LightCyan',
  'PowderBlue', 'LightBlue', 'SkyBlue', 'LightSkyBlue',
  'DodgerBlue', 'CornflowerBlue', 'RoyalBlue', 'SlateBlue',
  'MediumSlateBlue', 'DarkSlateBlue', 'Indigo', 'Purple', 'DarkMagenta', 'Blue',
  'MediumBlue', 'DarkBlue', 'Navy', 'Thistle',
  'Plum', 'Violet', 'Orchid', 'DarkOrchid', 'Fuchsia', 'Magenta', 'MediumOrchid',
  'BlueViolet', 'DarkViolet', 'DarkOrchid',
  'MediumPurple', 'Lavender', 'Gainsboro', 'LightGray', 'Silver', 'DarkGray', 'Gray',
  'DimGray', 'LightSlateGray', 'DarkSlateGray', 'Black'
];
var paleta = document.getElementById("paleta");
var grillaPixeles = document.getElementById("grilla-pixeles");
var indicadorColor = $('#indicador-de-color');
var apretado = false;
var borrar = document.getElementById('borrar');
var guardar = document.getElementById('guardar');
// Variable para guardar el elemento 'color-personalizado'
// Es decir, el que se elige con la rueda de color.
var colorPersonalizado = document.getElementById('color-personalizado');

function paletaColores() {
  for (let i = 0; i <= nombreColores.length; i++) {
    let nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'color-paleta';
    nuevoDiv.style.backgroundColor = nombreColores[i];
    paleta.append(nuevoDiv);
  }
}

function grilla() {
  for (let i = 0; i <= 1749; i++) {
    let nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'grilla-paleta';
    grillaPixeles.append(nuevoDiv);
  }
}

$(document).ready(function () {
  $('.color-paleta').click(function () {
    let seleccionarColor = $(this).css('background-color');
    indicadorColor.css('background-color', seleccionarColor);
  });
  $('.grilla-paleta').click(function () {
    let seleccionarColor = indicadorColor.css('background-color');
    $(this).css('background-color', seleccionarColor);
  });
});

grillaPixeles.addEventListener('mousedown', function (e) {
  apretado = true;
});

grillaPixeles.addEventListener('mouseup', function (e) {
  apretado = false;
});

grillaPixeles.addEventListener('dragend',function(e){
  apretado = false;
});

grillaPixeles.addEventListener('mouseover', function (e) {
  if (apretado) {
    pintarMovimiento(e);
  }
});

function pintarMovimiento(e) {
  if (apretado) {
    $(e.target).css('background-color', indicadorColor.css('background-color'));
  }
}
function borrarDibujo() {
  let $pantalla = $('.grilla-paleta');
  $pantalla.animate({ 'backgroundColor': 'white' }, 2000);
}
borrar.addEventListener('click', borrarDibujo);

$(document).on('click','.imgs li img',function () {
  var idHeroe = $(this).attr('id');
  switch (idHeroe) {
    case 'batman':
      cargarSuperheroe(batman)
      break;
    case 'wonder':
      cargarSuperheroe(wonder)
      break;
    case 'flash':
      cargarSuperheroe(flash)
      break;
    case 'invisible':
      cargarSuperheroe(invisible)
      break;
  }
})

guardar.addEventListener('click', guardarPixelArt);

colorPersonalizado.addEventListener('change', (function () {
  // Se guarda el color de la rueda en colorActual
  colorActual = colorPersonalizado.value;
  // Completar para que cambie el indicador-de-color al colorActual
  indicadorColor.css('background-color', colorActual);
})
);


paletaColores();
grilla();
