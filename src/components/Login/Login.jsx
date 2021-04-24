import "./Login.css";

const Login = ({
  userName,
  password,
  setUserName,
  setPassword,
  setLoggedIn,
}) => {
  let handleLogin = (e) => {
    e.preventDefault();
    if (userName === "hruday@gmail.com" && password === "hruday123") {
      setLoggedIn(true);
    }
  };

  return (
    <main className="form-signin">
      <form action="/action_page.php" method="post">
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            value={userName}
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={password}
            required
          />
          <button
            type="submit"
            onClick={(e) => {
              handleLogin(e);
            }}
          >
            Login
          </button>
          Username: hruday@gmail.com<br></br>Password: hruday123
        </div>
      </form>
    </main>
  );
};

export default Login;
