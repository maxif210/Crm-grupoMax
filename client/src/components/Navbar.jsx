import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="bg-dark-blue flex gap-10 w-1/3 h-screen flex-col items-center">
     
     <div className="mt-10">
      <Link to="/clientes" className="text-white">
        <h1 className="text-7xl">CRM</h1>
      </Link>
     </div>
     <div className="mt-20">
      <ul className="flex flex-col gap-10">
        <li>
          <Link to="/clientes" className="hover:bg-hover-blue active:bg-hover-blue px-2 py-1 text-3xl font-bold text-white rounded">Clientes</Link>
        </li>
        <li>
          <Link to="/users" className="hover:bg-hover-blue active:bg-hover-blue px-2 py-2 text-3xl font-bold text-white rounded">Usuario</Link>
        </li>
      </ul>

     </div>

    </div>
  );
}

export default Navbar;
