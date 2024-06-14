import { useState } from "react";
import "./App.css";
import SignIn from "./components/SignIn";
import UserRegistration from "./components/UserRegistration";

function App() {
  const [page, setPage] = useState("login");

  const goPage = (pag) => {
    setPage(pag);
  };

  return (
    <div>
      {page === "login" ? (
        <SignIn goPage={goPage} />
      ) : (
        <UserRegistration goPage={goPage} />
      )}
    </div>
  );
}

export default App;
