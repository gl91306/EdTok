import "./login.css";
function Login(props) {
  const handleLogin = () => {
    return <></>;
  };
  return (
    <>
      <div className="window">
        <div className="loginscreen">
          <h1>Login</h1>
          <div className="username">
            <p>Username</p>
            <input type="text" placeholder="username"></input>
          </div>
          <div className="passsword">
            <p>Username</p>
            <input type="text" placeholder="passsword"></input>
          </div>
          <div className="checkbox">
            <input type="checkbox" checked="checked"></input>
            Remember Me
          </div>
          <div className="loginbutton">
            <button onClick={handleLogin}>Login</button>
          </div>
          <div className="noaccount">
            Don't have an account? <b>Register</b>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
