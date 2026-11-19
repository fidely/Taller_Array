let listaEstudiantes = [
    { nombre: "Ana Torres", edad: 14, curso: "9A" },
    { nombre: "Mateo Ruiz", edad: 15, curso: "10B" },
    { nombre: "Lucia Gomez", edad: 13, curso: "8A" },
    { nombre: "Samuel Diaz", edad: 16, curso: "11A" },
    { nombre: "Valentina Cruz", edad: 14, curso: "9B" }
];

let inputNombre = document.getElementById("nombre");
let mensaje = document.getElementById("mensaje");
let lista = document.getElementById("lista");

function buscarEstudiante() {
    let nombre = inputNombre.value.trim().toUpperCase();

    if (nombre === "") {
        mensaje.textContent = "Ingrese el nombre del estudiante";
        lista.innerHTML = "";
        inputNombre.style.backgroundColor = "red";
        inputNombre.focus();
        return;
    }

    inputNombre.style.backgroundColor = "white";
    inputNombre.value = "";
    inputNombre.focus();
    mostrarEstudiante(nombre);
}

function mostrarEstudiante(nombre) {
    lista.innerHTML = "";
    mensaje.textContent = `El estudiante ${nombre} no fue encontrado`;

    for (let i = 0; i < listaEstudiantes.length; i++) {
        let estudianteActual = listaEstudiantes[i];

        if (estudianteActual.nombre.toUpperCase() === nombre) {
            mensaje.textContent = "Estudiante encontrado";
            lista.innerHTML += `<li>Nombre: ${estudianteActual.nombre}</li>
                <li>Edad: ${estudianteActual.edad} años</li>
                <li>Curso: ${estudianteActual.curso}</li>`;
        }
    }
}
