var url ="data/contactos.json"
var cargarPagina = function () {
    contactosAgenda();
};
var $areaContacto = $("#areaContacto");
var contactosAgenda = function (){
    $.getJSON(url,function (contactos) {
        contactos.forEach(mostrarContacto);  
    });
};
var plantillaContactos = 
"<li class='collection-item'><div>__nombre__<p>__numero__</p></div>"+
"</li>";
var mostrarContacto = function (contacto) {
    var $nombre = contacto.nombre;
    var $numero = contacto.correo;
    var $mostrar = "";
    $mostrar = plantillaContactos.replace("__nombre__",$nombre).replace("__numero__",$numero);
    $areaContacto.append($mostrar);
    console.log($mostrar);
    
}
$(document).ready(cargarPagina);
      

