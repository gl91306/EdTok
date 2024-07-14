import "./class.css";
function Header({ name, image, id }) {
  return (
    <div
      id="class"
      style={{ backgroundImage: "url(/images/" + image + ".png)" }}
      onClick={() => {
        // send with id then change page
        console.log("sent");
      }}
    >
      <div id="gradient">
        <p id="classname">{name}</p>
      </div>
    </div>
  );
}
export default Header;
