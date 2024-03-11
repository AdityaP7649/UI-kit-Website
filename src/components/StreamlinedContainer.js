import { useMemo } from "react";
import Property1BarDark from "./Property1BarDark";
import FooterSSocialsCard from "./FooterSSocialsCard";
import "./StreamlinedContainer.css";

const StreamlinedContainer = ({
  propWidth,
  propHeight,
  propLeft,
  propFlexDirection,
}) => {
  const everythingYouNeedStyle = useMemo(() => {
    return {
      width: propWidth,
      height: propHeight,
    };
  }, [propWidth, propHeight]);

  const frameDiv1Style = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const frameDiv2Style = useMemo(() => {
    return {
      flexDirection: propFlexDirection,
    };
  }, [propFlexDirection]);

  return (
    <div className="everything-you-need1" style={everythingYouNeedStyle}>
      <div className="frame-parent18" style={frameDiv1Style}>
        <div className="tag-parent7">
          <Property1BarDark
            text="Everything you need"
            property1BarDarkWidth="165px"
            property1BarDarkBorder="1px solid var(--color-gray-600)"
            version20IsColor="#000"
            version20IsBackground="unset"
            version20IsWebkitBackgroundClip="unset"
            version20IsWebkitTextFillColor="unset"
          />
          <div className="tag-parent7">
            <b className="h212">Streamlined for easy management</b>
            <div className="body13">
              Enjoy customizable lists, team work tools, and smart tracking all
              in one place. Set tasks, get reminders, and see your progress
              simply and quickly.
            </div>
          </div>
        </div>
        <div className="footer-ssocialscard-group" style={frameDiv2Style}>
          <FooterSSocialsCard
            cubeHelix1="/cubehelix-12@2x.png"
            heading="Integration ecosystem"
            footerSSocialsCardWidth="486px"
          />
          <FooterSSocialsCard
            cubeHelix1="/cubehelix-111@2x.png"
            heading="Goal setting and tracking"
            footerSSocialsCardWidth="486px"
          />
        </div>
      </div>
    </div>
  );
};

export default StreamlinedContainer;
