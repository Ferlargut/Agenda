
      $(document).ready(function(){
                    $("#agregar").click(agregarContactos);
                   
      });

     
 var agregarContactos = function (e) {
            e.preventDefault();
       
            //obtener los datos
        var $dondeAgregar =$("#imprimirContacto");
        var $nombre = $("#nombre").val();
        var $telefono = $("#telefono").val();
        var $correo = $("#mail").val();
        
       // crear elementos
        var $tarjeta = $("<div />");
        var $tituloNombre =$("<h6 />");
        var $pNumero = $("<p />");
        var $pCorreo = $("<p />");
        var $boton = $("<button />")

        //Perzonalidad
        $tarjeta.addClass("cont");
        $boton.click(borrarContacto);
        

        //Introducir elementos en el DOM
        $tarjeta.append($tituloNombre);
        $tarjeta.append($pNumero);
        $tarjeta.append($pCorreo);
        $tarjeta.append($boton)
        $dondeAgregar.append($tarjeta);
        
        
        var $contador = $(".cont").length;
        var $contar = $("#contador")
        console.log($contador);
        

            //Agregar contenido 
        $tituloNombre.text($nombre);
        $pNumero.text("Telefono : "+$telefono);
        $pCorreo.text("Correo : "+$correo);        
        $contar.text($contador);
        $boton.text("X");

    };     
    var borrarContacto = function () {        
        console.log(this);
        $(this).parent().remove();
                        
    };
         
      

