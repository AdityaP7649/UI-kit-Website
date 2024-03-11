import { useMemo } from "react";
import Property1Desktop from "./Property1Desktop";
import "./SecurityContainer.css";

const SecurityContainer = ({ propWidth, propWidth1 }) => {
  const footerStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const property1DesktopStyle = useMemo(() => {
    return {
      width: propWidth1,
    };
  }, [propWidth1]);

  return (
    <div className="footer" style={footerStyle}>
      <Property1Desktop
        property1DesktopPosition="absolute"
        property1DesktopTop="0px"
        property1DesktopLeft="-1px"
        property1DesktopWidth="1937px"
      />
    </div>
  );
};

export default SecurityContainer;
