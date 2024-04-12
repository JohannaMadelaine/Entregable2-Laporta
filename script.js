//Creacion de fecha

const fecha = document.querySelector("#fecha"); //Selecciona el div con ese id
const FECHA = new Date();
/*FECHA.charAt(0).toUpperCase()*/
fecha.innerHTML = FECHA.toLocaleDateString("es-AR", {
  weekday: "long",
  month: "short",
  day: "numeric",
}); /*Selecciona el espacio que hay vacio*/

//Saludo

alert("¡Vamos a interactuar!");
const pedirNombre = prompt("Ingrese su nombre").toUpperCase();
console.log(pedirNombre);

const pedirGenero = prompt(
  "Ingrese su genero : Masculino,femenino,otro"
).toLocaleLowerCase();
const pedirEdad = prompt("Ingrese su edad");

const saludo = prompt(
  `Hola ${pedirNombre}! Te gustaria tener una App de Tareas? Responda si o no`
).toLocaleLowerCase();
console.log(saludo);

let usuarioInfo = [pedirNombre, pedirGenero, pedirEdad];

//Control de flujo

if (saludo == "si" && pedirGenero == "masculino") {
  alert("Bienvenido a tu app de tareas");
} else if (saludo == "si" && pedirGenero == "femenino") {
  alert("Bienvenida a tu app de tareas");
} else if (saludo == "si" && pedirGenero == "otro") {
  alert("Bienvenid@ a tu app de tareas");
} else {
  alert("¡Que pena!Es una gran herramienta.");
}

console.log(usuarioInfo);

//ATAJOS

/*switch (pedirGenero) {
  case "Masculino":
    alert("Bienvenido a tu app de tareas");
    break;
  case "Femenino":
    alert("Bienvenida a tu app de tareas");
    break;
  case "Otro":
    alert("Bienvenid@ a tu app de tareas");
    break;
  default:
    alert("¡Que pena!Es una gran herramienta.");
}*/

/*Interactuar con el usuario,dandole opciones sobre para que la usaria:
1 Me permitiria establecer los objetivos de mi jornada.
2 Mejoraria mi memoria con su uso regular.
3 Obtendria un impulso motivacional al finalizar cada tarea.
4 Aprovecharia mejor mi tiempo.
*/

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
   3 - Obtendría un impulso motivacional al finalizar cada tarea."
   4 - Aprovecharía mejor mi tiempo.`)
    );
    if (opciones == "1") {
      alert("Excelente desición¡Concéntrate en tus objetivos!");
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

console.log(uso());

//En este caso usaria ciclo do while para repetir las respuestas en caso que la respuesta dada por el usuario no sea las asiganadas en la pregunta.
