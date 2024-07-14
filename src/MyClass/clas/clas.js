import "./clas.css";
function Clas({ name, image, id }) {
  return (
    <div
      className="clas"
      style={{ backgroundImage: "url(/images/" + image + ".png)" }}
      onClick={() => {
        // send with id then change page
        console.log("sent");
      }}
    >
      <div id="gradien">
        <p id="classnam">{name}</p>
      </div>
    </div>
  );
}
export default Clas;
