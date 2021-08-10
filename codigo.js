/* Vino un cliente y nos pidio lo siguiente:

Tenemos que poder agregar usuarios y que se pinten en el dom ***** ya agregamos, falta pintarlos
Los usuarios tienen que tener nombre, dni y saber si pueden o no comprar dólares ***** ya saben si pueden o no comprar dolares
En una segunda version de la aplicación, tenemos que validar si el usuario ya existe en la lista
Si el usuario ya existe, que me aparezca un cartel que diga: "El usuario ya existe"
Y si no, que lo agregue a la lista.
*/

const arrayDeNombres = [];

const identificarDNI = document.getElementById("identificarDNI");
const identificarNombre = document.getElementById("identificarNombre");
const agregarDatos = document.getElementById("agregarDatos");
const puedeComprar = document.getElementById("puedeComprar");
const noPuedeComprar = document.getElementById("noPuedeComprar");
const listaDePersonas = document.getElementById("listaDePersonas");
const usuarioExistente = document.getElementById("usuarioExistente");


agregarDatos.addEventListener("click", addNombreDNI);

function addNombreDNI(e) {
    e.preventDefault();

    

const persona = {
    nombre: identificarNombre.value, 
    dni: identificarDNI.value,

    check: checkearDolares()
    

};

const nombreExistente = corroborarUsuario();

if (nombreExistente){
    usuarioExistente.innerHTML = `<div class="cardPoder"><h3>El usuario ${persona.nombre} con DNI ${persona.dni} ya existe</h3>`
}
else{
    arrayDeNombres.push(persona);
    listaDePersonas.innerHTML = `${arrayDeNombres.map((persona, index) => 
        `<div class="card" key="${index}"><h3><u>Nombre</u>: ${persona.nombre}</h3><h3><u>DNI</u>: ${persona.dni}</h3><h3 style="color:#212529;">${persona.check}</h3></div>`).join("")}`;
}



puedeComprar.checked = false;
noPuedeComprar.checked = false;
identificarNombre.value = "";
identificarDNI.value = "";


}

function checkearDolares () {
    
    if (puedeComprar.checked === true) {
    
        return "Puede comprar dólares"
    }
    if (noPuedeComprar.checked === true) {
        
        return "No puede comprar dólares"

    }

    if (puedeComprar.checked === false && noPuedeComprar.checked === false) {
        return ""
    }

}

function corroborarUsuario () {

    const comprobar = arrayDeNombres.some((valor) => valor.nombre.toUpperCase() === identificarNombre.value.toUpperCase() && valor.dni === identificarDNI.value);
        return comprobar;
       
    }
  

