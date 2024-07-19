const UserPanel = ({ userData }) => {
  const { id, name, pass, email } = userData;

  return (
    <div>
      <h1 className="signIn-title">Bienvenido {name}</h1>
    </div>
  );
};

export default UserPanel;
