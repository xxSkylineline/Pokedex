import { traerDatosPokeapi } from "./fetchData.js";
import {
  crearTarjetaPokemon,
  crearPagina,
  crearTarjetaEstadisticasPokemon,
} from "./ui.js";

const url_pokeApi = "https://pokeapi.co/api/v2/pokemon/";

export async function mostrarPokemones(link) {
  document.querySelector("#tarjeta-pokemon").textContent = "";

  try {
    const res = await traerDatosPokeapi(link);

    for (let i = 0; i < Object.keys(res.results).length; i++) {
      const nombrePokemon = res.results[i].name;

      crearTarjetaPokemon(nombrePokemon, i);
    }
  } catch (error) {
    console.error("Error al requerir una respuesta:", error);
  }
}

export async function crearBotonesDePaginas(endpoint) {
  let link = await traerDatosPokeapi(url_pokeApi);
  let pagina = url_pokeApi + endpoint;
  let numeroDePagina = 1;
  while (pagina != null) {
    crearPagina(pagina, numeroDePagina);

    link = await traerDatosPokeapi(pagina);
    pagina = await link.next;
    numeroDePagina += 1;
  }
}

export async function mostrarEstadisticasPokemon(e) {
  let $botonEstadisticas = e;

  if ($botonEstadisticas.classList.contains("boton-estadisticas")) {
    let $tarjetaPokemon = document.querySelector("#tarjeta-pokemon");
    let nombrePokemon = $botonEstadisticas.dataset.nombrePokemon;
    $tarjetaPokemon.textContent = "";

    try {
      const res = await traerDatosPokeapi(url_pokeApi + nombrePokemon);
      const pokemonData = {
        nombre: res.name,
        tipo: [],
        altura: conversionDeDatos(res.height, "M", 10),
        peso: conversionDeDatos(res.weight, "Kg", 10),
        imagen: controlDeImagen(res),
        habilidades: [],
      };

      res.types.forEach((tipo) => {
        pokemonData.tipo.push(tipo.type.name);
      });

      res.moves.forEach((movimiento) => {
        pokemonData.habilidades.push(movimiento.move.name);
      });

      crearTarjetaEstadisticasPokemon(pokemonData);
    } catch (error) {
      console.log(
        "Se ha producido un error tratando de obtener las estadisticas del pokemon seleccionado",
        error
      );
    }
  }
}

function conversionDeDatos(entrada, tipo, conversor) {
  let resultadoConversion = entrada / conversor;

  resultadoConversion = resultadoConversion + " " + tipo;

  return resultadoConversion;
}

function controlDeImagen(imagenApi) {
  let imagenAverificar = imagenApi.sprites.other.dream_world.front_default;
  if (imagenAverificar == null) {
    imagenAverificar = imagenApi.sprites.other.home.front_default;
  }

  return imagenAverificar;
}
