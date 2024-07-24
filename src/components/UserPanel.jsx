const UserPanel = ({ goPage }) => {

  const userData = JSON.parse(localStorage.getItem('logged-user'));

  const { id, name, pass, email } = userData;

  const logout = () => {
    localStorage.clear();
    goPage("login");
  };

  return (
    <div>
      <h1 className="signIn-title">Bienvenido {name}</h1>
      <button onClick={logout}>Cerrar Sesión</button>
    </div>
  );
};

export default UserPanel;
