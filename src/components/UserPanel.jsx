import { useState } from "react";

let initialForm = {
  title: "",
  account: "",
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
    formData.append("content", form.account);

    fetch("http://localhost/MyPass/operations.php?addAccount", {
      method: "post",
      body: formData,
    })
    .then(response => response.text())
    .then(res => console.log(res))
    .catch(error => console.log(error))
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
            type="text"
            id="txt-account"
            name="account"
            placeholder="Cuenta: "
            onChange={handleChange}
            value={form.account}
            required
          />
          <input type="submit" id="btn-saveAccount" value="Agregar" />
        </form>
      </div>
    </div>
  );
};

export default UserPanel;
