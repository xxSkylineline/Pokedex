export function crearTarjetaPokemon(nombrePokemon, indice) {

  const $tarjetaPokemon = document.querySelector("#tarjeta-pokemon");
  let $cuadroPokemon = crearTarjeta() 
  $tarjetaPokemon.appendChild($cuadroPokemon);
  
  const $cuerpoTarjeta = document.querySelectorAll(".card")[indice];
  
  const $nuevoCuadro = document.createElement("div");
  $nuevoCuadro.setAttribute("class", "card-body");
  $cuerpoTarjeta.appendChild($nuevoCuadro);

  const $tarjetaTexto = document.querySelectorAll(".card-body")[indice];
  const $tarjetaTitulo = crearTarjetaTitulo(nombrePokemon)
  $tarjetaTexto.appendChild($tarjetaTitulo);
  
  const $botonPokemon = document.createElement('a')
  $botonPokemon.setAttribute('class','btn btn-primary boton-estadisticas');
  $botonPokemon.dataset.nombrePokemon = nombrePokemon
  $botonPokemon.textContent = 'Ver estadísticas'
  $tarjetaTexto.appendChild($botonPokemon)
  ;
}

export async function crearPagina(paginaSiguiente, numeroDePagina){
    const link = paginaSiguiente
    const $contenedorDePaginacion = document.createElement('li')
    $contenedorDePaginacion.setAttribute('class','page-item');

    document.querySelector('#box-paginas').appendChild($contenedorDePaginacion);
    console.log(link)
    const $pagina = document.createElement('a');
    $pagina.setAttribute('class', 'page-link')
    $pagina.dataset.link = await link;
    $pagina.textContent = numeroDePagina;
    $contenedorDePaginacion.appendChild($pagina);
}


export async function crearTarjetaEstadisticasPokemon(fotoPokemon, nombre){
  const $tarjetaPokemon = document.querySelector('#tarjeta-pokemon')
  const $cuerpoTarjeta = crearTarjeta()
  $tarjetaPokemon.appendChild($cuerpoTarjeta)


}
