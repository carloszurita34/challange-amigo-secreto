// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.


const agregarlistaAmigo = document.getElementById('amigo');
const listaAmigos = [];
const mostrarAmigos = document.getElementById('listaAmigos');
const resultadoAmigo = document.getElementById('resultado');




function agregarAmigo(){
    const nombre = agregarlistaAmigo.value.trim();

    if(validarNombre(nombre)){
        listaAmigos.push(nombre);
        mostrarAmigos.innerHTML += `<li>${nombre}</li>`;
        limpiarCaja();
    }

    //console.log(listaAmigos);
}

function validarNombre(nombre){
    const soloLetras = /^[A-Za-z\s]+$/;
    if (!nombre) {
        alert('Por favor ingrese un nombre');
        return false;
    } else if (!soloLetras.test(nombre)) {
        alert('El nombre solo puede contener letras y espacios. No se permiten números ni símbolos.');
        limpiarCaja();
        return false;
    }
    return true;
}

function sortearAmigo(){

    if(listaAmigos.length == ""){
        alert('por favor ingrese al menos un nombre');
        return;
    }
    const numAleatorio = Math.floor(Math.random() * listaAmigos.length);
    //console.log(numAleatorio);
    const amigoSecreto = listaAmigos[numAleatorio];
    resultadoAmigo.innerHTML = `El amigo secreto es: <li>${amigoSecreto}</li>`;
    limpiarListaAmigos();
}



function limpiarCaja (){
    document.querySelector('#amigo').value = "";
    
}


function limpiarListaAmigos(){
   
    mostrarAmigos.innerHTML = "";
    listaAmigos.length = 0; // Borra todos los elementos del array
    //console.log("se limpio lista");
}

