import { useContext,useState } from "react";
import { Context } from "../context/Context";

function Creditos() {

  const [teoria, setTeoria] = useState(0);
  const [practica, setPractica] = useState(0);
  const [valorTeoria, setValorTeoria] = useState(0);
  const [valorPractica, setValorPractica] = useState(0);

  const {createCreditos} = useContext(Context);

  const handleTeoriaChange = (e) => {
    const nuevoTeoria = parseFloat(e.target.value);
    setTeoria(isNaN(nuevoTeoria) ? 0 : nuevoTeoria);
    calculosValor(isNaN(nuevoTeoria) ? 0 : nuevoTeoria, practica);
  }

  const handlePracticaChange = (e) => {
    const nuevoPractica = parseFloat(e.target.value);
    setPractica(isNaN(nuevoPractica) ? 0 : nuevoPractica);
    calculosValor(teoria, isNaN(nuevoPractica) ? 0 : nuevoPractica);
  }

  const calculosValor = (t, p) =>{
    const suma = t + p;
    if (suma === 0) {
      setValorTeoria("0");
      setValorPractica("0");
    } else {
      setValorTeoria(((t / suma) * 100).toFixed(0));
      setValorPractica(((p / suma) * 100).toFixed(0));
    }
    createCreditos({
      teoria: t,
      practica: p,
    })
  }

  return (
    <div className="container bg-bloques rounded-md p-2 mb-3
    grid grid-cols-1 md:grid-cols-3 gap-4 items-center">
      <div className="md:col-span-2 p-4">
        <label className="block mb-2">
          <p className="mb-2 text-xl font-semibold">Creditos</p>
          <input
            className="w-full p-1 rounded-md text-lg font-bold text-center "
            type="number"
            placeholder="Teoria"
            min="0" max="20"
            onInput={(e) => (e.target.value = Math.max(0, Math.min(6, e.target.value)))}
            onChange={handleTeoriaChange}
          />
        </label>
        <label className="block">
          <input 
            className="w-full p-1 rounded-md text-lg font-bold text-center"
            type="number"
            placeholder="Practica"
            min="0" max="20"
            pattern="\d{1,2}"
            onInput={(e) => (e.target.value = Math.max(0, Math.min(6, e.target.value)))}
            onChange={handlePracticaChange}
          />
        </label>
      </div>
      <div className="md:col-span-1 p-4 ">
        <label className="block">
          <p className="text-xl font-semibold">Porcentajes</p>
          <p className="mt-4 text-lg">Teoría: {valorTeoria}%</p>
          <p className="mb-3 text-lg" >Práctica: {valorPractica}%</p>
        </label>
      </div>
    </div>
  );
}

export default Creditos;
