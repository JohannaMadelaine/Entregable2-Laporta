//Creacion de fecha

const fecha = document.querySelector("#fecha");
const FECHA = new Date();

const actualizarElementoHTML = (elemento, datos) => {
  elemento.innerHTML = datos.toLocaleDateString("es-AR", {
    weekday: "long",
    month: "short",
    day: "numeric",
  });
};

actualizarElementoHTML(fecha, FECHA);

 //EVENTOS

const botonTrivia = document.getElementById("boton");
botonTrivia.addEventListener("click", uso);

function uso() {
  let opciones;
  const pregunta = alert("Para qué utilizarías una app de tareas?");
  do {
    const alerta = alert(
      "Por favor,solo ingrese una opción válida : 1, 2, 3 o 4 como respuesta."
    );

    opciones = parseInt(
      prompt(`
   1 - Me permitiría establecer los objetivos de mi jornada.
   2 - Mejoraría mi memoria con su uso regular.
   3 - Obtendría un impulso motivacional al finalizar cada tarea.
   4 - Aprovecharía mejor mi tiempo.`)
    );
    if (opciones == "1") {
      alert("Excelente decisión¡Concéntrate en tus objetivos!");
    } else if (opciones == "2") {
      alert(
        "¡Es verdad!,esta herramienta mejoraría gradualmente tu capacidad para recordar y seguir tus tareas diarias."
      );
    } else if (opciones == "3") {
      alert("¡Tu cuerpo esta liberando dopamina!");
    } else if (opciones == "4") {
      alert(
        "Despreocúpate de las tareas pendientes porque estan totalmente organizadas."
      );
    } else {
      alert("Opcion Errónea");
    }
  } while (
    opciones !== 1 &&
    opciones !== 2 &&
    opciones !== 3 &&
    opciones !== 4
  );
}


//AGREGAR TAREA

const lista = document.querySelector("#lista");
const input = document.querySelector("#input");
const botonEnter = document.querySelector("#enter");
const check = "fa-check-circle";
const uncheck = "fa-circle";
const lineThrough = "line-through";
let id;
let LIST;

function agregarTarea(tarea, id, realizado, eliminado) {
  const elemento = `<li id = "elemento">
                    <i class="far fa-circle" data="realizado" id="${id}"></i>
                    <p class="text line-through">${tarea}</p>
                    <i class="fas fa-trash de" data="eliminado" id="${id}"></i>
                    </li>`;

  lista.insertAdjacentHTML("beforeend", elemento);
}

botonEnter.addEventListener("click", () => {
  const tarea = input.value;
  if (tarea) {
    agregarTarea(tarea, id, false, false);
    LIST.push({
      nombre: tarea,
      id: id,
      realizado: false,
      eliminado: false,
    });

    localStorage.setItem("TODO", JSON.stringify(LIST));
    id++;
    input.value = "";
  }
});


document.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    const tarea = input.value;
    if (tarea) {
      agregarTarea(tarea, id, false, false);
      LIST.push({
        nombre: tarea,
        id: id,
        realizado: false,
        eliminado: false,
      });

      localStorage.setItem("TODO", JSON.stringify(LIST));

      input.value = "";
      id++;
      console.log(LIST);
    }
  }
})

//Local storage get item

let data = localStorage.getItem("TODO");
if (data) {
  LIST = JSON.parse(data);
  console.log(LIST)
  id = LIST.length;
  cargarLista(LIST);
} else {
  LIST = [];
  id = 0;
}

function cargarLista(array) {
  array.forEach(function (i) {
    agregarTarea(i.nombre, i.id, i.realizazo, i.eliminado);
  });
}
