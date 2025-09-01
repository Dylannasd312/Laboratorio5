import React from "react";

interface Props {
  palabra: string;
  texto: string;
}


function busquedaBinaria(arr: string[], palabra: string): boolean {
  let izquierda = 0;
  let derecha = arr.length - 1;

  while (izquierda <= derecha) {
    let medio = Math.floor((izquierda + derecha) / 2);

    if (arr[medio] === palabra) {
      return true;
    } else if (arr[medio] < palabra) {
      izquierda = medio + 1;
    } else {
      derecha = medio - 1;
    }
  }
  return false;
}

const cajaResultado: React.FC<Props> = ({ palabra, texto }) => {
  if (!palabra || !texto) return null;

  const palabrasTexto = texto
    .toLowerCase()
    .split(/\W+/)
    .filter((p) => p.length > 0)
    .sort();

  const existe = busquedaBinaria(palabrasTexto, palabra.toLowerCase());

  return (
    <div>
      <h3>Resultado:</h3>
      <p style={{ color: existe ? "green" : "red", fontWeight: "bold" }}>
        {existe
          ? `La palabra "${palabra}" existe en el texto`
          : `La palabra "${palabra}" no existe en el texto`}
      </p>
    </div>
  );
};

export default cajaResultado;
