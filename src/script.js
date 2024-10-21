import { traerFotoPokemon } from "./fetchData.js";
import { crearTarjetaPokemon } from "./ui.js";


const url_pokeApi = 'https://pokeapi.co/api/v2/pokemon';

document.querySelector('#iniciar').addEventListener('click', async function () {
    document.querySelector('#tarjeta-pokemon').textContent = ''

    try {
        const res = await fetch(url_pokeApi);
        const data = await res.json();

        for (let i = 0; i < Object.keys(data.results).length; i++) {
            const nombrePokemon = data.results[i].name;

            const fotoPokemon = await traerFotoPokemon(nombrePokemon);

            crearTarjetaPokemon(nombrePokemon, i, fotoPokemon);
            console.log(nombrePokemon);
        }
    } 
    catch (error) {
        console.error('Hubo un problema con la solicitud:', error);
    }

    
})

