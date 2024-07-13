import "./register.css";
function Register() {
  return (
    <div className="windows">
      <div className="registerwindow">
        <div className="signuptitle">
          <h1>Register</h1>
          <div className="outline">
            <input type="text" placeholder="name"></input>
          </div>
          <div className="outline">
            <input type="text" placeholder="Email address"></input>
          </div>
          <div className="outline">
            <input type="text" placeholder="Password"></input>
          </div>
          <div className="check">
            <input type="checkbox" checked="checked"></input>I accept all terms
            & conditions
          </div>
          <div className="registerbutton">
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Register;
