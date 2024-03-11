import CTABlackS from "./CTABlackS";
import CTANoBackground from "./CTANoBackground";
import "./ProductivityContainer.css";

const ProductivityContainer = () => {
  return (
    <div className="hero1">
      <div className="rectangle-container">
        <div className="group-inner" />
        <div className="hero-content2">
          <b className="h12">Pathway to productivity</b>
          <div className="body11">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </div>
          <div className="buttons3">
            <div className="buttons-parent2">
              <CTABlackS
                text="Get for free"
                cTABlackSWidth="unset"
                cTABlackSBackgroundColor="#000"
                getForFreeColor="#fff"
              />
              <CTANoBackground text="Learn more" />
            </div>
          </div>
        </div>
        <img className="cylinder-1-icon1" alt="" src="/cylinder-1@2x.png" />
        <img className="visual-icon2" alt="" src="/visual@2x.png" />
      </div>
    </div>
  );
};

export default ProductivityContainer;
