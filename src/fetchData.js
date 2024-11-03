export async function traerDatosPokeapi(url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error al realizar la solicitud", error);
  }
};
