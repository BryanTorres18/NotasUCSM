import { useContext } from "react";
import { Context } from "../context/Context";

function Cheems() {
  const { currentImage } = useContext(Context);

  return (
    <div className="grid justify-items-center">
      <p className="bg-blanco p-2 rounded-md mb-4 text-3xl font-bold md:text-lg">
        {currentImage.mensaje}
      </p>
      <div className="h-80 w-80 md:h-96 md:w-96 min-h-15 min-w-15 
          bg-negro rounded-xl overflow-hidden flex-shrink-0">
        <img 
          className="object-cover w-full h-full max-w-full"
          src={currentImage.imagen} 
          alt="Cheems" />
      </div>
    </div>
  );
}

export default Cheems;
