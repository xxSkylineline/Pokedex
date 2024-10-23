export function crearTarjetaPokemon(nombrePokemon, indice, fotoPokemon) {

  const $tarjetaPokemon = document.querySelector("#tarjeta-pokemon");
  const $cuadroPokemon = document.createElement("div");
  $cuadroPokemon.setAttribute("class", "card");
  $cuadroPokemon.style.height = "210px";
  $cuadroPokemon.style.width = "210px";
  $tarjetaPokemon.appendChild($cuadroPokemon);
  
  const $cuerpoTarjeta = document.querySelectorAll(".card")[indice];
  const $imagenTarjeta = document.createElement("img");
  $imagenTarjeta.setAttribute("class", "card-img-top");
  $imagenTarjeta.setAttribute("src", fotoPokemon);
  $imagenTarjeta.dataset.nombrePokemon = nombrePokemon;
  $cuerpoTarjeta.appendChild($imagenTarjeta);

  const $nuevoCuadro = document.createElement("div");
  $nuevoCuadro.setAttribute("class", "card-body");
  $cuerpoTarjeta.appendChild($nuevoCuadro);

  const $tarjetaTexto = document.querySelectorAll(".card-body")[indice];
  const $tarjetaTitulo = document.createElement("p");
  $tarjetaTitulo.setAttribute("class", "card-text");

  $tarjetaTexto.appendChild($tarjetaTitulo);
  $tarjetaTitulo.textContent = nombrePokemon;

  const $botonPokemon = document.createElement('a')
  $botonPokemon.setAttribute('class','btn btn-primary');
  $botonPokemon.setAttribute('href', '#');
  $botonPokemon.textContent = 'Ir al pokemon'
  $tarjetaTexto.appendChild($botonPokemon)
  ;
}

export async function crearPaginas(paginaSiguiente){
