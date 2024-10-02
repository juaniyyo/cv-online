function copiarURL() {
    // Obtener la URL actual
    const url = window.location.href;

   // Usar el API Clipboard para copiar la URL al portapapeles
   navigator.clipboard.writeText(url)
   .then(function() {
       // Mostrar mensaje de confirmación
       alert('La URL se ha copiado al portapapeles: ' + url);
   })
   .catch(function(err) {
       // Manejar cualquier error
       console.error('Error al copiar la URL al portapapeles: ', err);
   });

}

// Escuchar el clic del botón de copiar URL
document.getElementById('btnCopiarURL').addEventListener('click', function () {
    copiarURL();
});