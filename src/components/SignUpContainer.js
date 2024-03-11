import CTABlackS from "./CTABlackS";
import CTANoBackground from "./CTANoBackground";
import "./SignUpContainer.css";

const SignUpContainer = () => {
  return (
    <div className="sign-up2">
      <div className="sign-up-inner1">
        <div className="frame-parent24">
          <div className="h2-parent10">
            <b className="h214">Sign up for free today</b>
            <div className="body15">
              Celebrate the joy of accomplishment with an app designed to track
              your progress and motivate your efforts.
            </div>
          </div>
          <div className="buttons-parent3">
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
      <img className="emojistar-1-icon1" alt="" src="/emojistar-11@2x.png" />
      <img className="helix2-1-icon1" alt="" src="/helix2-11@2x.png" />
    </div>
  );
};

export default SignUpContainer;
