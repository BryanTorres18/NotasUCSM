import { useContext, useState, useEffect } from "react";
import { Context } from "../context/Context";

function Notas() {
  const [teoriaFases, setTeoriaFases] = useState(["", "", ""]);
  const [practicaFases, setPracticaFases] = useState(["", "", ""]);
  const [promedioFases, setPromedioFases] = useState([0, 0, 0]);

  const { creditos, createPromedios } = useContext(Context);

  useEffect(() => {
    setTeoriaFases(["", "", ""]);
    setPracticaFases(["", "", ""]);
    setPromedioFases([0, 0, 0]);
  }, [creditos]);

  const handleTeoriaChange = (index, value) => {
    const newTeoriaFases = [...teoriaFases];
    newTeoriaFases[index] = parseFloat(value) || 0;
    setTeoriaFases(newTeoriaFases);
    calcularPromedios(newTeoriaFases, practicaFases);
  };

  const handlePracticaChange = (index, value) => {
    const newPracticaFases = [...practicaFases];
    newPracticaFases[index] = parseFloat(value) || 0;
    setPracticaFases(newPracticaFases);
    calcularPromedios(teoriaFases, newPracticaFases);
  };

  const calcularPromedios = (teoria, practica) => {
    const nuevoPromedioFases = teoria.map((teoriaValor, index) => {
      const promedio = Math.round((teoriaValor * creditos.teoria + practica[index] * creditos.practica) / (creditos.teoria + creditos.practica));
      return isNaN(promedio) ? 0 : promedio;
    });
    setPromedioFases(nuevoPromedioFases);
    createPromedios(nuevoPromedioFases);
  };

  return (
    <div className="container bg-bloques rounded-md p-4 mb-3 flex flex-col md:flex-row items-center pl-7">
      <div className="mb-4 md:mb-0 md:mr-16">
        <label className="block mb-2">
          <p className="block mb-2 text-xl font-semibold">Teoría</p>
          <div className="flex flex-raw md:flex-row gap-2">
            {[0, 1, 2].map((index) => (
              <input
                key={index}
                type="number"
                className="w-full md:w-1/3 p-2 rounded-md text-lg"
                placeholder={`${index + 1} Fase`}
                min="0"
                max="20"
                pattern="\d{1,2}"
                onInput={(e) => (e.target.value = Math.max(0, Math.min(20, e.target.value)))}
                onChange={(e) => handleTeoriaChange(index, e.target.value)}
                value={teoriaFases[index]}
              />
            ))}
          </div>
        </label>
      </div>
      <div className="mb-4 md:mb-0 md:mr-4 md:ml-5">
        <label className="block mb-2">
          <p className="block mb-2 text-xl font-semibold">Práctica</p>
          <div className="flex flex-raw md:flex-row gap-2">
            {[0, 1, 2].map((index) => (
              <input
                key={index}
                type="number"
                className="w-full md:w-1/3 p-2 rounded-md text-lg"
                placeholder={`${index + 1} Fase`}
                min="0"
                max="20"
                pattern="\d{1,2}"
                onInput={(e) => (e.target.value = Math.max(0, Math.min(20, e.target.value)))}
                onChange={(e) => handlePracticaChange(index, e.target.value)}
                value={practicaFases[index]}
              />
            ))}
          </div>
        </label>
      </div>
    </div>
  );
}

export default Notas;
