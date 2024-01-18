import { useContext } from "react";
import { Context } from "../context/Context";

function Promedios() {
  const { promedios } = useContext(Context);

  return (
    <div className="container bg-bloques rounded-md p-4 mb-3 flex flex-col md:flex-row items-center">
      <div className="mb-4 md:mb-0 md:mr-4">
        <p className="block mb-2 text-xl font-semibold">Promedios</p>
        <div className="flex flex-col md:flex-row gap-2">
          {[0, 1, 2].map((index) => (
            <input
              key={index}
              type="text"
              className="w-full md:w-1/3 p-2 rounded-md bg-blanco text-xl font-bold text-center"
              value={promedios[0][index]}
              disabled
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Promedios;
