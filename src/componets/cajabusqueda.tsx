import React from "react";

interface Props {
  textoCorto: string;
  setTextoCorto: (value: string) => void;
  textoLargo: string;
  setTextoLargo: (value: string) => void;
}

const cajaBusqueda: React.FC<Props> = ({ textoCorto, setTextoCorto, textoLargo, setTextoLargo }) => {
  return (
    <div>
      <label>qeu palabra buscaremos?</label>
      <input
        type="text"
        value={textoCorto}
        onChange={(e) => setTextoCorto(e.target.value)}
        placeholder="escribe palabra a buscar"
        style={styles.input}
      />

      <label>escribe texto largo:</label>
      <textarea
        value={textoLargo}
        onChange={(e) => setTextoLargo(e.target.value)}
        placeholder="escribe un texto más largo aquí..."
        rows={5}
        style={styles.textarea}
      />
    </div>
  );
};

export default cajaBusqueda;

const styles: { [key: string]: React.CSSProperties } = {
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "6px",
    marginBottom: "20px",
  },
};
