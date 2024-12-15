import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";

const App = () => {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="/sobre_mi" element={<SobreMi/>}/>
          <Route path="/habilidades" element={<Habilidades/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;