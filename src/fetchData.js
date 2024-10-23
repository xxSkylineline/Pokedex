export async function url_pokeapi(url){
   try{
   const res = await fetch(url);
   const data = await res.json();
   return data
   }
   catch(error){
      console.error('Error al realizar la solicitud', error)
   }
}

export async function traerFotoPokemon(nombrePokemon){
     const url_nombrePokemon =`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`
    
     try{
        const res = await fetch(url_nombrePokemon);
        const data = await res.json();
        return data.sprites.other.dream_world.front_default;
     } catch (error){
        console.error('no pudo devolver la imagen ', error)
     }
}

