export function crearTarjetaPokemon(nombrePokemon, indice, fotoPokemon){
    let $tarjetaPokemon = document.querySelector('#tarjeta-pokemon');
    const $cuadroPokemon = document.createElement('div');
    const $tarjetaTitulo = document.createElement('h5');
    const $imagenTarjeta = document.createElement('img');
    
    $cuadroPokemon.setAttribute('class', 'card');
    $cuadroPokemon.style.height = "210px";
    $cuadroPokemon.style.width = "210px";
    $tarjetaPokemon.appendChild($cuadroPokemon);
    
    const $cuerpoTarjeta = document.querySelectorAll('.card')[indice];
    $imagenTarjeta.setAttribute('class', 'card-img-top');
    $imagenTarjeta.setAttribute('src', fotoPokemon)
    $imagenTarjeta.dataset.nombrePokemon = nombrePokemon
    $cuerpoTarjeta.appendChild($imagenTarjeta);
    
    const $nuevoCuadro = document.createElement('div')
    $nuevoCuadro.setAttribute('class', 'card-body');

    $cuerpoTarjeta.appendChild($nuevoCuadro);

    const $tarjetaTexto = document.querySelectorAll('.card-body')[indice];

    $tarjetaTitulo.setAttribute('class', 'card-text');

    $tarjetaTexto.appendChild($tarjetaTitulo)
    $tarjetaTitulo.textContent = nombrePokemon
}

