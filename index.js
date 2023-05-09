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