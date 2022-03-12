import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
   <nav>
       <ul>
           <li> <NavLink to='/' activeClassName="active">Inicio</NavLink> </li>
           <li><NavLink to='Productos'activeClassName="active">Productos</NavLink></li>
           <li><NavLink to='Contacto'activeClassName="active">Contacto</NavLink></li>
       </ul>
   </nav>   

   
  )
}

export default Navbar