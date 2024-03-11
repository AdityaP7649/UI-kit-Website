import { useMemo } from "react";
import "./CTADefault.css";

const CTADefault = ({
  text = "Get for free",
  cTADefaultWidth,
  cTADefaultBackgroundColor,
  getForFreeFontFamily,
  getForFreeLetterSpacing,
  getForFreeColor,
}) => {
  const cTADefaultStyle = useMemo(() => {
    return {
      width: cTADefaultWidth,
      backgroundColor: cTADefaultBackgroundColor,
    };
  }, [cTADefaultWidth, cTADefaultBackgroundColor]);

  const getForFree2Style = useMemo(() => {
    return {
      fontFamily: getForFreeFontFamily,
      letterSpacing: getForFreeLetterSpacing,
      color: getForFreeColor,
    };
  }, [getForFreeFontFamily, getForFreeLetterSpacing, getForFreeColor]);

  return (
    <div className="ctadefault" style={cTADefaultStyle}>
      <div className="get-for-free4" style={getForFree2Style}>
        {text}
      </div>
    </div>
  );
};

export default CTADefault;
