var tBody = $('tbody');
var json = {};

$(document).ready(function() {
  // INVOCAR JSON
  $.getJSON('https://jsonplaceholder.typicode.com/posts/', function(data) {
    json = data;
    // LLENAR LA TABLA CON LA INFORMACION AL CARGAR LA PAGINA
    var tRows = '';
    for (var index = 0; index < 15; index++) {
      tRows += '<tr><td> ' + data[index].id + '</td><td>' + data[index].userId + 
               '</td><td>' + data[index].title + '</td><td>' + data[index].body + '</td></tr>';
    }
    tBody.append(tRows);
  })

  // LIMPIAR LA TABLA CON EL BOTON [RESET]
  $('.reset').click(function() {
    tBody.empty();
  });

  function agregarFilas() {
    var id = $('input').val() - 1;
    var tRow = '';
    tRow += '<tr><td> ' + json[id].id + '</td><td>' + json[id].userId + 
            '</td><td>' + json[id].title + '</td><td>' + json[id].body + '</td></tr>';
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