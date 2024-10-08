import { useState } from "react";
import Swal from "sweetalert2";

const initialForm = {
  name: "",
  email: "",
  pass: "",
};

const UserRegistration = ({ goPage }) => {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = new FormData();
    formData.append("id", Date.now());
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("pass", form.pass);

    fetch("http://localhost/MyPass/operations.php?addUser", {
      method: "post",
      body: formData,
    });

    Swal.fire({
      title: "Perfecto!",
      text: "Nuevo usuario agregado!",
      icon: "success"
    });

    setForm(initialForm);
    goPage("login")
  };

  return (
    <>
      <h1 className="title">Crear Cuenta</h1>
      <div className="signIn-container">
        {/* <h2 style={{ color: "white" }}>Datos</h2> */}
        <i className="fa-regular fa-id-card icon-lg"/>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            id="txt-username"
            name="name"
            value={form.name}
            placeholder="Nombre Usuario: "
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <input
            type="email"
            className="input"
            id="txt-email"
            name="email"
            value={form.email}
            placeholder="Email: "
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <input
            type="text"
            className="input"
            id="txt-pass"
            name="pass"
            value={form.pass}
            placeholder="Contraseña: "
            onChange={handleChange}
            autoComplete="off"
            required
          />
          <div className="btn-group">
            <input
              type="submit"
              className="btn"
              id="btn-create"
              value="Registrarse"
            />
            <button
              id="btn-cancel"
              className="btn"
              onClick={() => goPage("login")}
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UserRegistration;
