import { Form, Formik } from "formik";
import { useClients } from "../context/ClientProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function ClientForm() {
  const { createClient, getClient, updateClient } = useClients();
  const [client, setClient] = useState({
    name: "",
    email: "",
    tel: "",
    age: "",
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadClient = async () => {
      if (params.id) {
        const client = await getClient(params.id);
        console.log(client);
        setClient({
          name: client.name,
          email: client.email,
          tel: client.tel,
          age: client.age,
        });
      }
    };
    loadClient();
  }, []);

  return (
    <div>
      <Formik
        initialValues={client}
        enableReinitialize={true}
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateClient(params.id, values);
          } else {
            await createClient(values);
          }
          navigate("/clientes");
          setClient({
            name: "",
            email: "",
            tel: "",
            age: "",
          });
        }}
      >
        {({ handleChange, handleSubmit, values, isSubmitting }) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto mt-10"
          >
            <h1 className="text-xl font-bold uppercase text-center">
              {params.id ? "Editar Cliente" : "Nuevo Cliente"}
            </h1>
            <label className="block">Nombre del Cliente</label>
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

            <label className="block">Telefono</label>
            <input
            required
              name="tel"
              type="number"
              placeholder="Ingrese un telefono"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.tel}
            ></input>

            <label className="block">Edad</label>
            <input
              maxLength="2"
              name="age"
              type="text"
              placeholder="Ingrese edad"
              onChange={handleChange}
              className="px-2 py-1 rounded-sm w-full"
              value={values.age}
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

export default ClientForm;
