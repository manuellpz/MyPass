import { useEffect, useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import UserRegistration from "./components/UserRegistration";
import UserPanel from "./components/UserPanel";

function App() {
  const [page, setPage] = useState("login");

  const goPage = (pag) => {
    setPage(pag);
  };

  useEffect(() => {
    if(localStorage.getItem('logged-user'))
      goPage('panel')
  },[page])

  return (
    <div>
      {page === "login" && <SignIn goPage={goPage} />}

      {page === "register" && <UserRegistration goPage={goPage} />}

      {page === "panel" && <UserPanel goPage={goPage}/>}
    </div>
  );
}

export default App;
