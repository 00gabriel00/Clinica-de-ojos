$(document).ready(function() {
    // Obtener la URL actual
    var currentUrl = window.location.pathname;

    // Buscar el enlace que coincide con la URL actual
    var activeLink = $(".nav-link[href='" + currentUrl + "']");

    // Agregar la clase 'active' al enlace encontrado
    activeLink.addClass("active");
});