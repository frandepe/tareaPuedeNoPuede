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

//localStorage.setItem("unValor", "sarasa")

agregarDatos.addEventListener("click", addNombreDNI);

function addNombreDNI(e) {
    e.preventDefault();

    

const persona = {
    nombre: identificarNombre.value, 
    dni: identificarDNI.value,

    check: puedeComprar.checked 
    ? "Puede comprar dólares" 
    : "No puede comprar dólares",
    

};

//const nombreExistente = corroborarUsuario();

const personExist = arrayDeNombres.some((valor) => valor.dni === identificarDNI.value);

if (personExist){
    usuarioExistente.innerHTML = `<div class="cardPoder"><h3>El usuario con DNI ${persona.dni} ya existe</h3>`
}
else{
    arrayDeNombres.push(persona);
    pintarCodigo (arrayDeNombres);
}


identificarNombre.value = "";
identificarDNI.value = "";


}

function pintarCodigo (algunArray) {
    listaDePersonas.innerHTML = `${algunArray.map((persona, index) => 
        `<div class="card" key="${index}"><h3><u>Nombre</u>: ${persona.nombre} - <u>DNI</u>: ${persona.dni}</h3><h3 style="color:#212529;">${persona.check}</h3></div>`).join("")}`;
        //`<div class="card" key="${index}"><h3><u>Nombre</u>: ${persona.nombre}</h3><h3><u>DNI</u>: ${persona.dni}</h3><h3 style="color:#212529;">${persona.check}</h3></div>`).join("")}`
}

// function corroborarUsuario () {

//     const comprobar = arrayDeNombres.some((valor) => valor.dni === identificarDNI.value);
//         return comprobar;
       
//     }
  

