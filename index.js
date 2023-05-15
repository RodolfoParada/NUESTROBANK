const opcionesLista = document.getElementById("lista-texto");
const selectLista = document.createElement("select");


const restablecerOption = document.createElement("option");
restablecerOption.value = "Restablecer Contraseña";
restablecerOption.text = "Restablecer Contraseña";
selectLista.appendChild(restablecerOption);


const problemasOption = document.createElement("option");
problemasOption.value = "Problemas con su Cuenta Online";
problemasOption.text = "Problemas con su Cuenta Online";
selectLista.appendChild(problemasOption);

const solicitudOption = document.createElement("option");
solicitudOption.value = "Solicitud de Atención al Cliente";
solicitudOption.text = "Solicitud de Atención al cliente";
selectLista.appendChild(solicitudOption);

const otroOption = document.createElement("option");
otroOption.value = "Otro";
otroOption.text = "Otro";
selectLista.appendChild(otroOption);


opcionesLista.appendChild(selectLista);


var form = document.querySelector('form');
form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevenir comportamiento por defecto
    // Resto del código aquí

    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var apellido = document.getElementById("apellido").value;
    var lista = document.getElementById("lista").value;
    var mensaje = document.getElementById("mensaje").value;

    console.log("seleccion opciones", opcionesLista)
    console.log("select lista", selectLista)
    console.log("nombre: " + nombre)
    console.log("email: " + email)
    console.log("apellido: " + apellido)
    console.log("lista: " + lista)
    console.log("mensaje: " + mensaje)


    let boton = document.getElementById("button");
    boton.addEventListener("click", function () {});

    if (lista === restablecerOption.value) {
        alert(
            `DE: ${nombre} ${apellido} (${email})
               Asunto: ${restablecerOption.value}
               MENSAJE:
               ${mensaje}
        `)

    } else if (lista === solicitudOption.value) {
        alert(
            `DE: ${nombre} ${apellido} (${email}) 
             Asunto: ${solicitudOption.value}
               MENSAJE:
                ${mensaje}
             `)

    } else if (lista === problemasOption.value) {
        alert(
            `DE: ${nombre} ${apellido} (${email}) 
             Asunto: ${problemasOption.value}
               MENSAJE:
                ${mensaje}
             `)

    } else {
        alert(
            `DE: ${nombre} ${apellido} (${email})
             Asunto : Otro
               MENSAJE: ${otroOption.value}
                ${mensaje}
             `)
    }





});