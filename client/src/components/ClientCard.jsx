import { useClients } from "../context/ClientProvider";
import { useNavigate } from "react-router-dom";

function ClientCard({ client }) {
  const { deleteClient, toggleClientDone } = useClients();
  const navigate = useNavigate();

  const handleDone = async () => {
    await toggleClientDone(client.id);
  };

  return (
    <div className="bg-card-blue  text-white rounded-md p-4 mb-5">
      <header className="flex justify-between">
        
        <h2 className="text-base font-bold text-gray-500">{client.name}</h2>

        <span className="text-gray-500">Conected {client.done == 1 ? "️✅️" : "❌"}</span>
      </header>
      <p className="text-sm text-gray-500">{client.email}</p>
      <p className="text-sm text-gray-500">Telefono:{client.tel}</p>
      <p className="text-sm text-gray-500">Edad:{client.age}</p>
     
      <div className="flex gap-x-1 mt-2">
        <button
          className="bg-slate-300 px-2 py-1 text-black rounded"
          onClick={() => deleteClient(client.id)}
        >
          Delete
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black rounded"
          onClick={() => navigate(`/editClient/${client.id}`)}
        >
          Edit
        </button>
        <button
          className="bg-slate-300 px-2 py-1 text-black rounded"
          onClick={() => handleDone(client.done)}
        >
          Toggle Client
        </button>
      </div>
    </div>
  );
}

export default  ClientCard;
