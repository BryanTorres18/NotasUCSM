import { createContext, useState, useEffect } from "react";
import { cheems } from "../data/Cheems";

export const Context = createContext();

export function ContextProvider(props) {
  const [creditos, setCreditos] = useState({
    teoria: 0,
    practica: 0,
  });

  const [promedios, setPromedios] = useState([0],[0],[0]);
  const [currentImage, setCurrentImage] = useState({});

  useEffect(() => {
    const imageInfo = showImage();
    setCurrentImage(imageInfo);
  }, [promedios]);

  function createCreditos(credito) {
    setCreditos({
      teoria: credito.teoria,
      practica: credito.practica,
    });
  }

  function createPromedios(promedio){
    setPromedios([promedio]);
  }


  function createPromedioFinal(){
    const promedioFinal = (Math.round(promedios[0][0] + promedios[0][1] + promedios[0][2]) / 3).toFixed(0);
    return isNaN(promedioFinal) ? 0 : promedioFinal;
  }

  function showImage(){
    const promedioFinal = createPromedioFinal();
    const found = cheems.find(
      (cheem) => Math.round(cheem.id) === Math.round(promedioFinal)
    );
    if (found) {
      const { imagen, mensaje } = found;
      return { imagen, mensaje };
    } else {
      return { imagen: "image-0.jpg" , mensaje: "Esperando"};
    }
  }

  return (
    <Context.Provider
      value={{
        creditos,
        promedios,
        createCreditos,
        createPromedios,
        createPromedioFinal,
        currentImage,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}
