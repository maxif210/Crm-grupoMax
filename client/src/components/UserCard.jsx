import { useUsers } from "../context/UserProvider";
import { useNavigate } from "react-router-dom";

function UserCard({ user }) {
  const { deleteUser, toggleUserDone } = useUsers();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleUserDone(user.id);
  };

  return (
    <div className="bg-card-blue  text-white rounded-md p-4 mb-5">
      <header className="flex justify-between">
        <h2 className="text-base font-bold text-gray-500">{user.name}</h2>
        <span className="text-gray-500">Conected {user.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-sm text-gray-500">{user.email}</p>
      {/* <span className="text-black">{user.createAt}</span> */}
      <div className="flex gap-x-1 mt-2">
        <button
          className="bg-slate-300 px-2 py-1 text-black rounded"
          onClick={() => deleteUser(user.id)}
        >
          Delete
        </button>
        
        <button
          className="bg-slate-300 px-2 py-1 text-black rounded"
          onClick={() => handleDone(user.done)}
        >
          Toggle User
        </button>
      </div>
    </div>
  );
}

export default UserCard;
