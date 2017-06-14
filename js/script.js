var root = 'https://jsonplaceholder.typicode.com';
var tBody = $('tbody');
var objAjax = {};

$(document).ready(function() {
  // INVOCAR AJAX
  $.ajax({
    url: root + '/posts/',
    method: 'GET',
    cache: false

  }).then(function(data) {
    objAjax = data;
    // LLENAR LA TABLA CON LA INFORMACION AL CARGAR LA PAGINA
    var tRows = '';
    for (var index = 0; index < 15; index++) {
      tRows += '<tr><td> ' + data[index].id + '</td><td>' + data[index].userId + 
               '</td><td>' + data[index].title + '</td><td>' + data[index].body + '</td></tr>';
    }
    tBody.append(tRows);
  });

  // LIMPIAR LA TABLA CON EL BOTON [RESET]
  $('.reset').click(function() {
    tBody.empty();
  });

  function agregarFilas() {
    var id = $('input').val() - 1;
    var tRow = '';
    tRow += '<tr><td> ' + objAjax[id].id + '</td><td>' + objAjax[id].userId + 
            '</td><td>' + objAjax[id].title + '</td><td>' + objAjax[id].body + '</td></tr>';
    tBody.append(tRow);
  }
  
  // AGREGAR LA FILA CON LA INFO DESEADA
  $('.buscar').click(function() {
    agregarFilas();  
  }); 
  // AGREGAR LA FILA AL PRESIONAR [ENTER]
  $("#buscador").on('keyup', function (event) {
      if (event.keyCode == 13) {
          agregarFilas();
      }
  });

  // EVITAR EL SUBMIT DEL FORMULARIO
  $('form').submit(function(event){
        event.preventDefault();
    });
});