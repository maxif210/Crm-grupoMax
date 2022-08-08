import { Form, Formik } from "formik";
import { useUsers } from "../context/UserProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function UserForm() {
  const { createUser, getUser, updateUser } = useUsers();
  const [user, setUser] = useState({
    name: "",
    email: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const user = await getUser(params.id);
        console.log(user);
        setUser({
          name: user.name,
          email: user.email,
        });
      }
    };
    loadUser();
  }, []);

  return (
    <div>
      <Formik
        initialValues={user}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateUser(params.id, values);
          } else {
            await createUser(values);
          }
          navigate("/users");
          setUser({
            name: "",
            email: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Usuario" : "Nuevo Usuario"}
            </h1>
            <label className="block">Nombre de Usuario</label>
            <input
            required
              type="text"
              name="name"
              placeholder="Ingrese un Nombre"
              className="px-2 py-1 rounded-sm w-full"
              onChange={handleChange}
              value={values.name}
            />

            <label className="block">Email</label>
            <input
            required
              name="email"
              type="email"
              placeholder="Ingrese un email"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.email}
            ></input>

            <button
              type="submit"
              disabled={isSubmitting}
              className="block bg-indigo-500 px-2 py-1 mt-5 text-white w-full rounded-md"
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default UserForm;
