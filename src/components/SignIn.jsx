const SignIn = () => {
  return (
    <div>
      <h1 className="signIn-title">Iniciar Sesión</h1>
      <div className="signIn-container">
        <i className="fa-solid fa-user icon-lg"></i>
        <form>
          <input
            type="email"
            className="input"
            id="txt-email"
            placeholder="Email: "
            required
          />
          <input
            type="password"
            className="input"
            id="txt-pass"
            placeholder="Contraseña: "
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
          <button className="btn" id="btn-create">
            Crear Cuenta
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
