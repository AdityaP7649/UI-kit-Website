import { useMemo } from "react";
import Property1Default1 from "./Property1Default1";
import CTABlackS from "./CTABlackS";
import "./Property1Default.css";

const Property1Default = ({
  property1DefaultBackgroundColor,
  property1DefaultWidth,
}) => {
  const property1DefaultStyle = useMemo(() => {
    return {
      backgroundColor: property1DefaultBackgroundColor,
      width: property1DefaultWidth,
    };
  }, [property1DefaultBackgroundColor, property1DefaultWidth]);

  return (
    <div className="property-1default" style={property1DefaultStyle}>
      <Property1Default1 logosaas="/logosaas@2x.png" />
      <div className="stack3">
        <div className="customers">About</div>
        <div className="customers">Features</div>
        <div className="customers">Customers</div>
        <div className="customers">Updates</div>
        <div className="customers">Help</div>
        <CTABlackS
          text="Get for free"
          cTABlackSWidth="unset"
          cTABlackSBackgroundColor="#000"
          getForFreeColor="#fff"
        />
      </div>
    </div>
  );
};

export default Property1Default;
