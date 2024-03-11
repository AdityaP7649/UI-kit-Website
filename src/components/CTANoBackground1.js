import { useMemo } from "react";
import "./CTANoBackground1.css";

const CTANoBackground1 = ({
  text = "Get for free",
  icons,
  cTANoBackgroundWidth,
  cTANoBackgroundHeight,
  getForFreeFontWeight,
  getForFreeFontFamily,
  getForFreeLetterSpacing,
  getForFreeLineHeight,
}) => {
  const cTANoBackgroundStyle = useMemo(() => {
    return {
      width: cTANoBackgroundWidth,
      height: cTANoBackgroundHeight,
    };
  }, [cTANoBackgroundWidth, cTANoBackgroundHeight]);

  const getForFree1Style = useMemo(() => {
    return {
      fontWeight: getForFreeFontWeight,
      fontFamily: getForFreeFontFamily,
      letterSpacing: getForFreeLetterSpacing,
      lineHeight: getForFreeLineHeight,
    };
  }, [
    getForFreeFontWeight,
    getForFreeFontFamily,
    getForFreeLetterSpacing,
    getForFreeLineHeight,
  ]);

  return (
    <div className="ctano-background1" style={cTANoBackgroundStyle}>
      <div className="get-for-free3" style={getForFree1Style}>
        {text}
      </div>
      <img className="icons48" alt="" src={icons} />
    </div>
  );
};

export default CTANoBackground1;
