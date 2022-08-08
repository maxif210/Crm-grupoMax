import { useEffect } from "react";
import UserCard from "../components/UserCard";
import { useUsers } from "../context/UserProvider";
import { Link } from "react-router-dom";
import user from '../public/user.svg'
import logout from '../public/logout.svg'



function UsersPage() {
  const { users, loadUsers } = useUsers();

  useEffect(() => {
    loadUsers();
  }, []);

  function renderMain() {
    if (users.length === 0) return <h1>No hay usuarios ingresados</h1>;
    return users.map((user) => <UserCard user={user} key={user.id} />);
  }

  return (
    <div className="w-full">
      <div className="flex gap-10 flex-row-reverse">
        <Link to="/login" ><button ><img className="h-6 w-6 rounded" src={logout} alt="avatar"/></button></Link>
        <h3 className="text-2xl text-gray-400 font-bold mb-5 ">Nombre de Usuario</h3>
        <img className="h-10 w-10 rounded" src={user} alt="avatar"/>
      </div>

      <div className="bg-dark-blue rounded p-5">
      <h3 className="text-3xl text-white font-bold mb-5">Usuarios</h3>
      <div className="flex-directio-column gap-2">{renderMain()}</div>
      </div>
      <div className="text-end mt-5 ">
      <Link className="hover:bg-hover-blue active:bg-hover-blue px-2 py-2 text-lg font-bold text-black rounded" to="/newUser" >Agregar usuario<span>➕</span></Link>
      </div>
    </div>
  );
}

export default UsersPage;
