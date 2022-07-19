import "./App.css";
import { Navigate, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Inicio from "./pages/Inicio";
import Sobrenosotros from "./pages/Sobrenosotros";
import Contacto from "./pages/Contacto";
import Ingresar from "./pages/Ingresar";
import SlideRoutes from "react-slide-routes";
import Registro from "./pages/Registro";
import Recuperar from "./pages/Recuperar";
function App() {
  return (
    <>
      <Navbar />
      <SlideRoutes>
        <Route path="/" element={<Inicio />} />
        <Route path="/sobrenosotros" element={<Sobrenosotros />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/registro" element={<Registro />} />
        <Route path="/recuperar" element={<Recuperar />} />
        <Route path="*" element={<Navigate replace to="/"/>}/>
      </SlideRoutes>
    </>
  );
}

export default App;
