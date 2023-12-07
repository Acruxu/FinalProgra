
//variables de la seccion form
var cambiotrabajo= document.getElementById("cambiotrabajo");
var secciontrabajo = document.getElementById("contendorintrotrabajo");
var seccionform = document.getElementById("secformulario");

//variables de la home
var regreso = document.getElementById("home");
var introhome = document.getElementById("seccionintrohome");
var infogeneral = document.getElementById("seccioninfogeneral");


//variable tabla
var tabla = document.getElementById("contenedortabla"); 
var cambiota = document.getElementById("cambiotabla");

//variable exposiciones
var seccionexposicion = document.getElementById("exposiciones");
var botonexpo = document.getElementById("expo");
var aparicionul = document.getElementById("botonesocultos");

//variable del form


//Cambio a la seccion de trabajo
cambiotrabajo.onclick=function(){
	secciontrabajo.style.display="block";
	seccionform.style.display="flex";
	introhome.style.display="none";
	infogeneral.style.display="none";
	tabla.style.display="none"
	seccionexposicion.style.display="none";
}

//cambio a la seccion de ranking
cambiota.onclick=function(){
	introhome.style.display="none";
	infogeneral.style.display="none";
	secciontrabajo.style.display="none";
	seccionform.style.display="none";
	tabla.style.display="block";
	seccionexposicion.style.display="none";
}

//Reinicio de la pag para ir a la home
regreso.onclick=function(){
	window.location.reload();
}

//aparecer expos
contadordeclicks = 1;
botonexpo.onclick=function(){
	contadordeclicks = contadordeclicks + 1;
	if (contadordeclicks % 2 == 1){
	aparicionul.style.display="none";
	}
	else{
	aparicionul.style.display="flex";
	}
}



//document.getElementById("enviodata").addEventListener('click', function(event) {
//event.preventDefault();
//console.log('Hiciste clic en el enlace, pero la acción predeterminada se evitó.');
//});

