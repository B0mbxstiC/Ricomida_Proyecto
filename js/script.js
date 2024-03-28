$( "#correo" ).hover(function(){
    $(this).tooltip("Hola mundo");
} );

$( "#correo" ).click(function(){
    alert("El correo fue enviado correctamente");
} );

$( "#favoritos" ).hover(function(){
    $(this).tooltip();
} );

$( "#favoritos" ).click(function(){
    alert("La receta fue añadida correctamente");
} );

$(document).ready(function(){
	$(".rojo").on("click", function(){
        $(this).css("background-color", "red");
	});
});

$( ".escondeTitulo" ).on( "click", function() {
    $(".card-text").toggle( "slow", function() {
    });
  });