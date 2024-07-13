import "./header.css";
import pfp from "../images/pfp.png"; // temp
function Header() {
  return (
    <div id="header">
      <div id="profilecontainer">
        <p id="username">john doe</p>
        <img id="pfp" src={pfp} alt="profile" />
      </div>
    </div>
  );
}
export default Header;
