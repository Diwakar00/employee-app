import { useState } from "react";

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  let [userName, setUserName] = useState("");
  let [password, setPassword] = useState("");
  let [loggedIn, setLoggedIn] = useState(false);

  return (
    <div className="App">
      {loggedIn ? (
        <Dashboard />
      ) : (
        <Login
          userName={userName}
          password={password}
          setUserName={setUserName}
          setPassword={setPassword}
          setLoggedIn={setLoggedIn}
        />
      )}
    </div>
  );
}

export default App;
