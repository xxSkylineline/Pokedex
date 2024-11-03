import {
  mostrarPokemones,
  crearBotonesDePaginas,
  mostrarEstadisticasPokemon,
} from "./logica.js";

function inicializar() {
  crearBotonesDePaginas("?limit=20&offset=0");
  
}

inicializar();

let $botonesDePagina = document.querySelector("#box-paginas");

$botonesDePagina.onclick = function (e) {
  let pagina = e.target;

  if (pagina.tagName == "A") {
    let nuevaPagina = pagina.dataset.link;
    console.log(nuevaPagina)
    mostrarPokemones(nuevaPagina);
  }
};

let $botonesDeEstadisticas = document.querySelector("#tarjeta-pokemon");

$botonesDeEstadisticas.onclick = function (e) {
  let $botonesDeEstadisticas = e.target;
  mostrarEstadisticasPokemon($botonesDeEstadisticas);
};
