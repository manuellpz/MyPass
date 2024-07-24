import { useState, useEffect } from "react";
import Swal from "sweetalert2";

let loginInitial = {
  email: "",
  pass: "",
};

const SignIn = ({ goPage, setUserData }) => {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState(loginInitial);

  useEffect(() => {
    fetch("http://localhost/MyPass/operations.php?getUsers")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error(error));
  }, [users]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = users.find(el => el.email === form.email && el.pass === form.pass)
    
    if(user) {
      localStorage.setItem('logged-user',JSON.stringify(user));
      goPage("panel")
    }else {
      Swal.fire({
        icon:"error",
        title:"Lo sentimos",
        text:"¡Correo y/o contrasena incorrectos!"
      })
    }
  };

  const handleChange = (e) => {
    setForm(
      {
        ...form,
        [e.target.name] : e.target.value
      }
    )
  }

  return (
    <div>
      <h1 className="signIn-title">Iniciar Sesión</h1>
      <div className="signIn-container">
        <i className="fa-solid fa-user icon-lg"></i>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="input"
            id="txt-email"
            name="email"
            placeholder="Email: "
            autoComplete="off"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            className="input"
            id="txt-pass"
            name="pass"
            placeholder="Contraseña: "
            onChange={handleChange}
            required
          />
          <input
            type="submit"
            className="btn"
            id="btn-signIn"
            value="Ingresar"
          />
        </form>
        <hr />
        <div>
          <label style={{ color: "white" }}>Aún no tienes cuenta? </label>
          <button
            className="btn"
            id="btn-create"
            onClick={() => goPage("register")}
          >
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
