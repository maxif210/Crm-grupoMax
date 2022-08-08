import { createContext, useContext, useState } from "react";
import {
  getUsersRequest,
  deleteUserRequest,
  createUserRequest,
  getUserRequest,
  updateUserRequest,
  toggleUserDoneRequest,
} from "../api/users.api";
import { UserContext } from "./UserContext";

export const useUsers = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUsers must be used within a UserContextProvider");
  }
  return context;
};

export const UserContextProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  async function loadUsers() {
    const response = await getUsersRequest();
    setUsers(response.data);
  }

  const deleteUser = async (id) => {
    try {
      const response = await deleteUserRequest(id);
      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const createUser = async (user) => {
    try {
      await createUserRequest(user);
      // setUsers([...users, response.data]);
    } catch (error) {
      console.error(error);
    }
  };

  const getUser = async (id) => {
    try {
      const response = await getUserRequest(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateUser = async (id, newFields) => {
    try {
      const response = await updateUserRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleUserDone = async (id) => {
    try {
      const userFound = users.find((user) => user.id === id);
      await toggleUserDoneRequest(id, userFound.done === 0 ? true : false);
      setUsers(
        users.map((user) =>
          user.id === id ? { ...user, done: !user.done } : user
        )
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        users,
        loadUsers,
        deleteUser,
        createUser,
        getUser,
        updateUser,
        toggleUserDone,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
