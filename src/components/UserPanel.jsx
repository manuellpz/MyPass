import { useState } from "react";
import UserAccounts from "./UserAccounts";

let initialForm = {
  title: "",
  email: "",
  pass: "",
};

const UserPanel = ({ goPage }) => {
  const userData = JSON.parse(localStorage.getItem("logged-user"));

  const { id, name, pass, email } = userData;

  const logout = () => {
    localStorage.clear();
    goPage("login");
  };

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
    formData.append("user_id", parseInt(id));
    formData.append("title", form.title);
    formData.append("email", form.email);
    formData.append("pass", form.pass);

    fetch("http://localhost/MyPass/operations.php?addAccount", {
      method: "post",
      body: formData,
    })
      .then((response) => response.text())
      .then((res) => console.log(res))
      .catch((error) => console.log(error));
    
    setForm(initialForm);

  };

  return (
    <div className="container-userPanel">
      <h1 className="title">Bienvenido {name}</h1>
      <hr />
      <button onClick={logout} className="btn-logout">
        <i className="fa-solid fa-door-open"></i>
        <span>Cerrar Sesion</span>
      </button>
      <br />
      <br />
      <br />
      <div className="container-form">
        <h2 className="title">Nueva cuenta</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="txt-title"
            name="title"
            placeholder="Titulo: "
            onChange={handleChange}
            value={form.title}
            required
          />
          <input
            type="email"
            id="txt-email"
            name="email"
            placeholder="Cuenta: "
            onChange={handleChange}
            value={form.email}
            required
          />
          <input
            type="text"
            id="txt-pass"
            name="pass"
            placeholder="Contrasena: "
            onChange={handleChange}
            value={form.pass}
            required
          />
          <input type="submit" id="btn-saveAccount" value="Agregar" />
        </form>
      </div>
      <hr />
      <UserAccounts user_id={id}/>
    </div>
  );
};

export default UserPanel;
