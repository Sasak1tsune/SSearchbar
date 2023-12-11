function Enter(event) {
    if (event.keyCode === 13) {
        // Aquí puedes llamar a la función que deseas ejecutar
        busqueda(1);
    }
}

function busqueda(dominio) {
    // Obten el valor del input de búsqueda
    var searchTerm = document.getElementById('searchInput').value;
    var busquedaUrl;
    switch (dominio) {
        case 1:
            busquedaUrl = 'https://www.google.com/search?q=' + encodeURIComponent(searchTerm);
            break;
        case 2:
            busquedaUrl = 'https://duckduckgo.com/?q=' + encodeURIComponent(searchTerm);
            break;
        case 3:
            busquedaUrl = 'https://www.bing.com/search?q=' + encodeURIComponent(searchTerm);
            break;
        case 4:
            busquedaUrl = 'https://www.youtube.com/results?search_query=' + encodeURIComponent(searchTerm);
            break;
    }
    // Redirige a la búsqueda en Google
    window.open(busquedaUrl);
}
function actualizarReloj() {
    var ahora = new Date();
    var horas = ahora.getHours();
    var minutos = ahora.getMinutes();
    var segundos = ahora.getSeconds();
    var dia = ahora.getDate();
    var mes = ahora.getMonth() + 1; // ¡Recuerda que los meses en JavaScript comienzan desde 0!
    var año = ahora.getFullYear();

    horas = horas < 10 ? "0" + horas : horas;
    minutos = minutos < 10 ? "0" + minutos : minutos;
    segundos = segundos < 10 ? "0" + segundos : segundos;
    mes = mes < 10 ? "0" + mes : mes;

    var cadenaTiempo = horas + ":" + minutos + ":" + segundos;
    var cadenaFecha = dia + "/" + mes + "/" + año;

    document.getElementById("reloj").innerHTML = cadenaFecha + "<br>" + cadenaTiempo;
}
function handleKeyPress(event) {
    // Verificar si la tecla presionada es "Enter" (código 13)
    if (event.keyCode === 13) {
        // Llamar a la función busqueda(1) cuando se presiona "Enter"
        busqueda(1);
    }
}

setInterval(actualizarReloj, 1000);

actualizarReloj();