import { useMemo } from "react";
import "./Property1LightmodeBar.css";

const Property1LightmodeBar = ({
  text = "This page is included in a free SaaS Website Kit.",
  link = "View the complete Kit",
  showThisPageIs,
  property1LightmodeBarWidth,
  frameDivAlignSelf,
  frameDivWidth,
}) => {
  const property1LightmodeBarStyle = useMemo(() => {
    return {
      width: property1LightmodeBarWidth,
    };
  }, [property1LightmodeBarWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      alignSelf: frameDivAlignSelf,
      width: frameDivWidth,
    };
  }, [frameDivAlignSelf, frameDivWidth]);

  return (
    <div className="property-1lightmode-bar" style={property1LightmodeBarStyle}>
      <div
        className="this-page-is-included-in-a-fre-parent"
        style={frameDivStyle}
      >
        {showThisPageIs && <div className="this-page-is">{text}</div>}
        <div className="view-the-complete-kit-parent">
          <div className="view-the-complete">{link}</div>
          <img className="icons45" alt="" src="/icons.svg" />
        </div>
      </div>
    </div>
  );
};

export default Property1LightmodeBar;
