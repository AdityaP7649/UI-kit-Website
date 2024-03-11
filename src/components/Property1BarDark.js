import { useMemo } from "react";
import "./Property1BarDark.css";

const Property1BarDark = ({
  text = "Version 2.0 is here",
  property1BarDarkWidth,
  property1BarDarkBorder,
  version20IsColor,
  version20IsBackground,
  version20IsWebkitBackgroundClip,
  version20IsWebkitTextFillColor,
}) => {
  const property1BarDarkStyle = useMemo(() => {
    return {
      width: property1BarDarkWidth,
      border: property1BarDarkBorder,
    };
  }, [property1BarDarkWidth, property1BarDarkBorder]);

  const version20IsStyle = useMemo(() => {
    return {
      color: version20IsColor,
      background: version20IsBackground,
      webkitBackgroundClip: version20IsWebkitBackgroundClip,
      webkitTextFillColor: version20IsWebkitTextFillColor,
    };
  }, [
    version20IsColor,
    version20IsBackground,
    version20IsWebkitBackgroundClip,
    version20IsWebkitTextFillColor,
  ]);

  return (
    <div className="property-1bar-dark" style={property1BarDarkStyle}>
      <div className="version-20-is" style={version20IsStyle}>
        {text}
      </div>
    </div>
  );
};

export default Property1BarDark;
