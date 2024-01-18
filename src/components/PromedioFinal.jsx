import { useContext } from "react";
import { Context } from "../context/Context";

function PromedioFinal() {
  const { createPromedioFinal } = useContext(Context);
  const promedio = parseFloat(createPromedioFinal());

  let colorPromedio = '';
  if (promedio === 0) {
    colorPromedio = 'text-negro';
  } else if (promedio <= 11) {
    colorPromedio = 'text-rojo';
  } else if (promedio >= 12) {
    colorPromedio = 'text-verde';
  }

  return (
    <div className="container bg-bloques rounded-md mb-2 flex items-center justify-center">
      <p className="text-2xl font-semibold mr-10">Promedio Final:</p>
      <input
        className={`w-1/4 p-2 rounded-md bg-blanco text-xl font-bold text-center ${colorPromedio}`}
        value={createPromedioFinal()}
        disabled
      />
    </div>
  );
}

export default PromedioFinal;

