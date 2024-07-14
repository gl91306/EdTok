import "./MyClasses.css";
import Class from "./class/class";
function MyClasses() {
  var classes = [
    ["Math", "math", "234j234"],
    ["Reading", "reading", "2452wr"],
    ["Biology", "biology", "asdfsdfa"],
    ["World History", "hush", "asfasdfasdf"],
  ];

  return (
    <div className="myclasses">
      <div id="Title">My Classes</div>
      <div id="classes">
        {classes.map((clas, id) => (
          <Class name={clas[0]} image={clas[1]} id={clas[2]} key={id} />
        ))}
      </div>
    </div>
  );
}
export default MyClasses;
