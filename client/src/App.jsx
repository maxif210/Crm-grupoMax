import { Route, Routes } from "react-router-dom";
import UsersPage from "./pages/UsersPage";
import UserForm from "./pages/UserForm";
import NotFound from "./pages/NotFound";
import { UserContextProvider } from "./context/UserProvider";
import { ClientContextProvider } from "./context/ClientProvider";


import ClientsPage from "./pages/ClientsPage";
import ClientForm from "./pages/ClientForm";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";





function App() {


  return (
    <div className="bg-soft-white-500 h-screen flex font-mono">
     <Navbar/>
      
      <div className="container mx-auto py-4 px-20 w-full" >
        <UserContextProvider>
        <ClientContextProvider>
          <Routes>            
            <Route path="/" element={<LoginPage />} />
            <Route path="/users" element={<UsersPage />} />
            <Route path="/clientes" element={<ClientsPage />} />
            <Route path="/newClient" element={<ClientForm />} />
            <Route path="/editClient/:id" element={<ClientForm />} />
            <Route path="/newUser" element={<UserForm />} />
            <Route path="/editUser/:id" element={<UserForm />} />
            <Route path="*" element={<NotFound />} />
            
          </Routes>
          </ClientContextProvider>
        </UserContextProvider>
      </div>

      
    </div>
  );
}

export default App;
