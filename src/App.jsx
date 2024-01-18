import Cheems from "./components/Cheems";
import Creditos from "./components/Creditos";
import Notas from "./components/Notas";
import PromedioFinal from "./components/PromedioFinal";
import Promedios from "./components/Promedios";

function App() {
  return (
    <div className="bg-fondo min-h-screen flex items-center justify-center">
      <div className="bg-rectangulo p-10 rounded-xl 
            border border-negro border-r-4 border-b-4 border-l-0 border-t-0
            ">
        <div className="container mx-auto grid grid-cols-2 gap-2">
          <div className="col-span-3 md:col-span-2 lg:col-span-1">
              <Creditos />
              <Notas />
            <div className="container bg-bloques rounded-md p-2 mb-3">
              <Promedios />
              <PromedioFinal />
            </div>
          </div>
          <div className="col-span-2 lg:col-span-1 md:pt-9">
            <Cheems />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
