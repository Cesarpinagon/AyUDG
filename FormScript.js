document.getElementById('boton-publicar').addEventListener('click', function() {
    document.getElementById('ventana-flotante').style.display = 'block';
    document.getElementById('fondo-oscuro').style.display = 'block';
  });

  document.getElementById('fondo-oscuro').addEventListener('click', function() {
    document.getElementById('ventana-flotante').style.display = 'none';
    this.style.display = 'none';
  });

  document.getElementById('imgselect').addEventListener('change', function(e) {
    var archivo = e.target.files[0]; // Obtiene el archivo
    if (archivo) {
      var reader = new FileReader();
      
      reader.onload = function(e) {
        var imagenMostrada = document.getElementById('imgcargada');
        imagenMostrada.src = e.target.result;
        imagenMostrada.style.display = 'block'; // Muestra la imagen
      };
      
      reader.readAsDataURL(archivo); // Lee el archivo como URL de datos
    }
  });
