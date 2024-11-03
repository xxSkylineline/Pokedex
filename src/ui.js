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
  
    const $pagina = document.createElement('a');
    $pagina.setAttribute('class', 'page-link')
    $pagina.dataset.link = await link;
    $pagina.textContent = numeroDePagina;
    $contenedorDePaginacion.appendChild($pagina);
}


export async function crearTarjetaEstadisticasPokemon(pokemon){
  const $tarjetaPokemon = document.querySelector('#tarjeta-pokemon')
  const $cuerpoTarjeta = crearTarjeta()
  $tarjetaPokemon.appendChild($cuerpoTarjeta)

  let cuerpoTarjeta = document.querySelector('.card')
  let nombrePokemon = crearTarjetaTitulo(pokemon.nombre);
  cuerpoTarjeta.appendChild(nombrePokemon);

  let imagenPokemon = crearImagen(pokemon.imagen);
  cuerpoTarjeta.appendChild(imagenPokemon);

   let tipoPokemon= '';
  Object.values(pokemon.tipo).forEach(tipo => {
    tipoPokemon= tipoPokemon + tipo + ' '
  })
  
  let tablaTipoPokemon = crearTablaInfoPokemon('TIPO',tipoPokemon);
  cuerpoTarjeta.appendChild(tablaTipoPokemon);

  let tablaAltura = crearTablaInfoPokemon('Altura', pokemon.altura);
  cuerpoTarjeta.appendChild(tablaAltura);

  let tablaPeso = crearTablaInfoPokemon('Peso', pokemon.peso)
  cuerpoTarjeta.appendChild(tablaPeso)

  let movimientosPokemon= '';
  Object.values(pokemon.habilidades).forEach(habilidad => {
    movimientosPokemon = movimientosPokemon + habilidad + ' / ';
  })
  
  let tablaHabilidades = crearTablaInfoPokemon('Habilidades', movimientosPokemon)
  cuerpoTarjeta.appendChild(tablaHabilidades)

}


function crearTarjeta(){

  let $cuadroPokemon = document.createElement("div");
  $cuadroPokemon.setAttribute("class", "card text-center");
  $cuadroPokemon.style.width = "18rem";

  return $cuadroPokemon
}

function crearImagen(nombrePokemon){
  let $imagenTarjeta = document.createElement("img");
  $imagenTarjeta.setAttribute("class", "card-img-top");
  $imagenTarjeta.setAttribute('src', `${nombrePokemon}`);

  return $imagenTarjeta;
}

function crearTarjetaTitulo(nombrePokemon){

  let $tarjetaTitulo = document.createElement("h5");
  $tarjetaTitulo.setAttribute("class", "card-text");
  $tarjetaTitulo.textContent = nombrePokemon;

  return $tarjetaTitulo;
}

function crearTabla(){
  let tabla= document.createElement('table');
  return tabla;
}

function crearFilaTabla(){
  let fila = document.createElement('tr');
  fila.setAttribute('class', 'bg-danger text-white');
  return fila;
}

function crearCeldaTabla(){
  let celda = document.createElement('td');
  celda.setAttribute('class', 'rounded-3')
  return celda
}

function crearTablaInfoPokemon(encabezadoPokemon, descripcionPokemon){

  let $contenedorTabla = crearTabla();
  let $contenedorFilaNombre = crearFilaTabla();
  let $contenedorCeldaNombre = crearCeldaTabla()

  $contenedorCeldaNombre.textContent = encabezadoPokemon;

  $contenedorTabla.appendChild($contenedorFilaNombre);
  $contenedorFilaNombre.appendChild($contenedorCeldaNombre);

  let $contenedorFilaDescripcion = crearFilaTabla();
  $contenedorFilaDescripcion.setAttribute('class', 'bg-light')

  let $contenedorCeldaDescripcion = crearCeldaTabla();

  $contenedorCeldaDescripcion.textContent = descripcionPokemon;

  $contenedorTabla.appendChild($contenedorFilaDescripcion);
  $contenedorFilaDescripcion.appendChild($contenedorCeldaDescripcion)

  return $contenedorTabla
}