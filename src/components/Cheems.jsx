import { useContext } from "react";
import { Context } from "../context/Context";

function Cheems() {
  const { currentImage } = useContext(Context);

  return (
    <div className="grid justify-items-center">
      <p className="bg-blanco p-2 rounded-md mb-4 text-3xl font-bold">
        {currentImage.mensaje}
      </p>
      <div className="h-96 w-96 min-h-20 min-w-20 
          bg-negro rounded-xl overflow-hidden">
        <img 
          className="object-cover w-full h-full"
          src={currentImage.imagen} 
          alt="Cheems" />
      </div>
    </div>
  );
}

export default Cheems;
