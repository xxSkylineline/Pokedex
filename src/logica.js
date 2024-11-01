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

    console.log(res.results.length);
    for (let i = 0; i < Object.keys(res.results).length; i++) {
      const nombrePokemon = res.results[i].name;

      crearTarjetaPokemon(nombrePokemon, i);
    }
  } catch (error) {
    console.error("Error al requerir una respuesta:", error);
  }
}

export async function crearBotonesDePaginas() {
  let link = await traerDatosPokeapi(url_pokeApi);
  let pagina = await link.next;
  let numeroDePagina = 1;
  while (pagina != null) {
    crearPagina(pagina, numeroDePagina);

    link = await traerDatosPokeapi(pagina);
    pagina = await link.next;
    numeroDePagina += 1;
  }
}

export function mostrarEstadisticasPokemon(e) {
  let $botonEstadisticas = e;

  if ($botonEstadisticas.classList.contains("boton-estadisticas")) {
    let $tarjetaPokemon = document.querySelector("#tarjeta-pokemon");
    let nombrePokemon = $botonEstadisticas.dataset.nombrePokemon;
    $tarjetaPokemon.textContent = "";
   
    traerDatosPokeapi(url_pokeApi + nombrePokemon).then((res) => {
      const pokemonData = {
        nombre: res.name,
        tipo: [],
        altura: res.height,
        peso: res.weight,
        imagen: res.sprites.other.dream_world.front_default,
        habilidades: [],
      };

      res.types.forEach((tipo) => {
        pokemonData.tipo.push(tipo.type.name);
      });

      console.log(pokemonData);
      crearTarjetaEstadisticasPokemon(pokemonData);
    });
  }
}
