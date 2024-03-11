import { useMemo } from "react";
import "./LogoDefault.css";

const LogoDefault = ({ logosaas, logoDefaultPosition }) => {
  const logoDefaultStyle = useMemo(() => {
    return {
      position: logoDefaultPosition,
    };
  }, [logoDefaultPosition]);

  return (
    <div className="logodefault" style={logoDefaultStyle}>
      <div className="logodefault-child" />
      <img className="logosaas-icon" alt="" src={logosaas} />
    </div>
  );
};

export default LogoDefault;
