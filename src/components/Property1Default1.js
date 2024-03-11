import LogoDefault from "./LogoDefault";
import "./Property1Default1.css";

const Property1Default1 = ({ logosaas }) => {
  return (
    <div className="property-1default1">
      <LogoDefault
        logosaas="/logosaas1@2x.png"
        logoDefaultPosition="relative"
      />
      <div className="made-by">made by</div>
      <img
        className="black-horizontal-1-icon"
        alt=""
        src="/blackhorizontal-1.svg"
      />
    </div>
  );
};

export default Property1Default1;
