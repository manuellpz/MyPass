import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import UserRegistration from "./components/UserRegistration";
import UserPanel from "./components/UserPanel";

function App() {
  const [page, setPage] = useState("login");
  const [userData, setUserData] = useState("");

  const goPage = (pag) => {
    setPage(pag);
  };

  return (
    <div>
      {page === "login" && <SignIn goPage={goPage} setUserData={setUserData} />}

      {page === "register" && <UserRegistration goPage={goPage} />}

      {page === "panel" && <UserPanel userData={userData} />}
    </div>
  );
}

export default App;
