import "./header.css";
import pfp from "../images/pfp.png"; // temp
function Header() {
  return (
    <div id="profilecontainer">
      <p id="username">john doe</p>
      <img id="pfp" src={pfp} alt="profile" />
    </div>
  );
}
export default Header;
