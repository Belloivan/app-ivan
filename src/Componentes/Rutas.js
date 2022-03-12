import { BrowserRouter as Router, Route, Routes } from
"react-router-dom";
import Inicio from "./Inicio";
import Contacto from "./Contacto"
import Productos from "./Productos";
import Navbar from "./Navbar";
import { Error404 } from "./Error404";

const Rutas = () => {
   return (
     <Router>
       <Navbar/>
        <Routes>
              <Route path="/" element= {<Inicio/>} />
              <Route path="Productos" element= { <Productos />} />
              <Route path="Contacto" element= {<Contacto />} />
              <Route path="*" element= {<Error404 />} />
       </Routes>
     </Router>
);
}
export default Rutas