import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Inicio from "./components/Inicio";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import Habilidades from "./components/Habilidades";
import Contacto from "./components/Contacto";
import { useContext } from "react";
import Contexto from "./contexto/Contexto";

const App = () => {
  const {darkMode} = useContext(Contexto); 

  return (
    <main className={darkMode && "dark"}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio/>}/>
          <Route path="/proyectos" element={<Proyectos/>}/>
          <Route path="/sobre_mi" element={<SobreMi/>}/>
          <Route path="/habilidades" element={<Habilidades/>}/>
          <Route path="/contacto" element={<Contacto/>}/>
        </Routes>
      </BrowserRouter>
    </main>
    
  )
}

export default App;