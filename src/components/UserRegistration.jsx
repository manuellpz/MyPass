const UserRegistration = ({ goPage }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h1 className="signIn-title">Crear Cuenta</h1>
      <div className="signIn-container">
        <h2 style={{ color: "white" }}>Datos</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="input"
            id="txt-username"
            placeholder="Nombre Usuario: "
            required
          />
          <input
            type="text"
            className="input"
            id="txt-pass"
            placeholder="Contraseña: "
            required
          />
          <input
            type="email"
            className="input"
            id="txt-email"
            placeholder="Email: "
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
