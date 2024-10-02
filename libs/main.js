// Espera a que el DOM esté completamente cargado
const btnImprimir = document.getElementById("btnImprimir");
btnImprimir.addEventListener("click", function () {
    const link = document.createElement("a");
    link.href = "files/CV-Juan-M.-Rube.pdf";
    link.download = "CV-Juan-M.-Rube.pdf";
    link.click();
});

function copiarURL() {
    const url = window.location.href;
    navigator.clipboard
        .writeText(url)
        .then(function () {
            alert("La URL se ha copiado al portapapeles: " + url);
        })
        .catch(function (err) {
            console.error("Error al copiar la URL al portapapeles: ", err);
        });
}
document.getElementById("btnCopiarURL").addEventListener("click", function () {
    copiarURL();
});

function cargarVisitas() {
  fetch("server/counter.php")
      .then(response => response.text()) 
      .then(data => {
          document.getElementById("counter").innerText = data;
      })
      .catch(error => console.error("Error al cargar las visitas:", error));
}

window.onload = cargarVisitas;
