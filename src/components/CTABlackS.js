import { useMemo } from "react";
import "./CTABlackS.css";

const CTABlackS = ({
  text = "Get for free",
  cTABlackSWidth,
  cTABlackSBackgroundColor,
  getForFreeColor,
}) => {
  const cTABlackSStyle = useMemo(() => {
    return {
      width: cTABlackSWidth,
      backgroundColor: cTABlackSBackgroundColor,
    };
  }, [cTABlackSWidth, cTABlackSBackgroundColor]);

  const getForFreeStyle = useMemo(() => {
    return {
      color: getForFreeColor,
    };
  }, [getForFreeColor]);

  return (
    <div className="ctablack-s" style={cTABlackSStyle}>
      <div className="get-for-free1" style={getForFreeStyle}>
        {text}
      </div>
    </div>
  );
};

export default CTABlackS;
