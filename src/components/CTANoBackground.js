import "./CTANoBackground.css";

const CTANoBackground = ({ text = "Get for free" }) => {
  return (
    <div className="ctano-background">
      <div className="get-for-free2">{text}</div>
      <img className="icons46" alt="" src="/icons1.svg" />
    </div>
  );
};

export default CTANoBackground;
