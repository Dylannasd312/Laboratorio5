import React, { useState } from "react";
import CajaBusqueda from "./componets/cajabusqueda";
import CajaResultado from "./componets/cajaresultado";

const App: React.FC = () => {
  const [textoCorto, setTextoCorto] = useState("");
  const [textoLargo, setTextoLargo] = useState("");

  return (
    <div style={styles.container}>
      <h2>Busqueda Binaria en Texto</h2>

    
      <CajaBusqueda
        textoCorto={textoCorto}
        setTextoCorto={setTextoCorto}
        textoLargo={textoLargo}
        setTextoLargo={setTextoLargo}
      />

  
      <CajaResultado palabra={textoCorto} texto={textoLargo} />
    </div>
  );
};

export default App;

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: "600px",
    margin: "40px auto",
    padding: "20px",
    border: "1px solid #000000a1",
    borderRadius: "10px",
    background: "#320a4fff", 
    fontFamily: "Arial, sans-serif",
    color: "white",
  },
};
