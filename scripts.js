// Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
document.getElementById('gen-1').textContent="Generasion pokimon 1"

// Cambia el color de fondo de la primera generación de Pokimon.
//let gen = document.getElementsByClassName('infocard-list infocard-list-pkmn-lg')
//document.querySelector('infocard-list').[1].style.backgroundColor= "grey";
//let gen = document.getElementsByClassName('infocard-list infocard-list-pkmn-lg')
//document.querySelector('infocard-lg-img').[0].style.backgroundColor= "grey";
//document.getElementsByClassName('.infocard-list.infocard-list-pkmn-lg').style
// Variable para controlar el estado del estilo
let isFirstTime = true;

// Función para aplicar el estilo gris al primer encuentro con la clase 'infocard-list.infocard-list-pkmn-lg'
function applyGreyBackground() {
    // Seleccionar los elementos con la clase 'infocard-list.infocard-list-pkmn-lg'
    const background = document.querySelector('.infocard-list');
    background.style.backgroundColor= ('grey');
    
    // Verificar si se ha encontrado por primera vez y aún no se ha aplicado el estilo gris
    if (isFirstTime) {
        // Iterar sobre los elementos encontrados
        for (let i = 0; i < elements.length; i++) {
            // Aplicar el estilo gris de fondo
            elements[i].style.backgroundColor = "grey";
        }
        // Actualizar el estado para indicar que ya se ha aplicado el estilo gris
        isFirstTime = false;
    }
}

// Llamar a la función para aplicar el estilo gris al cargar la página
window.onload = applyGreyBackground;
// Imprime por consola la URL de la página.
let value = document.URL;
console.log(value);

// Imprime por consola el dominio de la página.
let valor = document.domain;
console.log(valor);

// Imprime todos los nodos de imagen.
let nodosImg = document.getElementsByTagName('img');
for (var i = 0; i < nodosImg.length; i++) {
    console.log(nodosImg[i]);
}

// Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
var imagenes = document.getElementsByTagName('img');
for (var i = 0; i < imagenes.length; i++) {
    imagenes[i].src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}
//document.getElementsByTagName('src').textContent = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

// Premium:

// Cambia el fondo de todos los infocard-lg-data text-muted para todos los Pokimon voladores itype flying

// if (document.getElementsByClassName('infocard-lg-data text-muted').textContent="Flying"){
//     backgroundColor=red;
// }
let elemento = document.getElementsByClassName('infocard-lg-data text-muted');

for (var i = 0; i < elemento.length; i++) {
    var texto = elemento[i].textContent;
    if (texto.includes("Flying")) {
        elemento[i].style.backgroundColor = "red";
    }
}
