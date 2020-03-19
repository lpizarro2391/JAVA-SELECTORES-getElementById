//Variable


var nombre;
var apellido;
var email;
var usuario;
var password;
var boton;


//asignación

nombre = document.getElementById("nombre");
apellido = document.getElementById("apellido");
email = document.getElementById("email");
usuario= document.getElementById("usuario");
password= document.getElementById("password");
boton = document.getElementById("btn-guardar");

//mostrar el objeto seleccionado

console.log(password);

//funcion que se ejecuta en el evento

function mostrarAlerta(mensaje){
  alert('el usuario realizó click en el botón de envío');
}

// Asignación del evento al botón

boton.addEventListener('click',mostrarAlerta);
