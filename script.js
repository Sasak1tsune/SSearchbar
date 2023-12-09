function busqueda(dominio) {
    // Obten el valor del input de búsqueda
    var searchTerm = document.getElementById('searchInput').value;
    var busquedaUrl;
    switch(dominio){
        case 1:
            busquedaUrl = 'https://www.google.com/search?q='+ encodeURIComponent(searchTerm);
            break;
        case 2:
            busquedaUrl = 'https://duckduckgo.com/?q='+ encodeURIComponent(searchTerm);
            break;
        case 3:
            busquedaUrl = 'https://www.bing.com/search?q='+ encodeURIComponent(searchTerm);
            break;
    }
    // Redirige a la búsqueda en Google
    window.location.href = busquedaUrl;
}
