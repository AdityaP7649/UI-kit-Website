import { useMemo } from "react";
import "./FooterSSocialsCard.css";

const FooterSSocialsCard = ({
  cubeHelix1,
  heading = "Integration ecosystem",
  footerSSocialsCardWidth,
}) => {
  const footerSSocialsCardStyle = useMemo(() => {
    return {
      width: footerSSocialsCardWidth,
    };
  }, [footerSSocialsCardWidth]);

  return (
    <div className="footer-ssocialscard" style={footerSSocialsCardStyle}>
      <img className="cube-helix-1-icon" alt="" src={cubeHelix1} />
      <div className="h2-parent6">
        <b className="h210">{heading}</b>
        <div className="body10">
          <p className="enhance-your-productivity">
            Enhance your productivity by connecting  with your favorite tools,
            keeping all your
          </p>
          <p className="enhance-your-productivity"> essentials in one place.</p>
        </div>
      </div>
    </div>
  );
};

export default FooterSSocialsCard;
