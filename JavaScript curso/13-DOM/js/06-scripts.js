const encabezado = document.querySelector('.contenido-hero h1').textContent;
console.log(encabezado);

// console.log(encabezado.innerText); //Si en el CSS - visibility: hidden; no lo va a encontrar
// console.log(encabezado.textContent); // Si lo va a encontrar
// console.log(encabezado.innerHTML); //Se trae el HTML

// document.querySelector('.contenido-hero h1').textContent = 'Nuevo heading';

const imagen = document.querySelector('.card img');
imagen.src = 'img/hacer2.jpg'