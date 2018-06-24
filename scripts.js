  // 1. Crear una varible y asignar un nuevo objeto XMLHttpRequest
  // 2. Abrir una nueva conexión con el método open() (en los argumentos se especifica el tipo
  // de request GET y también la URL del endpoint API)
  // 3. El request se completa y se podrá acceder a la data dentro de la función onload.
  // 4. Cuando se termine se podrá enviar el request.

  // Mostrar data a través del DOM
  const app = document.getElementById("root");
  const logo = document.createElement("img");
  logo.src = "logo.png";
  const container = document.createElement("div");
  container.setAttribute("class", "container");

  app.appendChild(logo);
  app.appendChild(container);

// Creando una variable para asignar un nuevo objeto XMLHttpRequest.
const request = new XMLHttpRequest();

// Abrir una nueva conexión, usando GET request en la URL endpoint
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function() {
  // Comenzar el acceso a la data JSON
    // Se usa JSON.parse() para parsear la respuesta y crear una variable
    // llamada data que contenga todo el archivo JSON como un JS array.
    // Usando forEach() se consolea el titulo de cada film para asegurar que funciona.
    // crear condición en caso de que la url no funcione. 200 succesful request.
  let data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400){
  data.forEach(movie => {
    const card = document.createElement("div");
    card.setAttribute("class", "card");

    const h1 = document.createElement("h1");
    h1.textContent = movie.title;

    const p = document.createElement("p");
    movie.description = movie.description.substring(0,600);
    p.textContent = `${movie.description}...`;

    container.appendChild(card);
    card.appendChild(h1);
    card.appendChild(p);
    });
  } else{
  const errorMessage = document.createElement("marquee");
  errorMessage.textContent = "Oops! try again";
  app.appendChild(errorMessage);
    }
}
request.send();
