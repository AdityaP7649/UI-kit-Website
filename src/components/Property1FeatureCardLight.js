import { useMemo } from "react";
import CTANoBackground1 from "./CTANoBackground1";
import "./Property1FeatureCardLight.css";

const Property1FeatureCardLight = ({
  icons,
  heading = "Integration ecosystem",
  trackYourProgressAndMotiv,
  yourEffortsEveryday,
  property1FeatureCardLightWidth,
  property1FeatureCardLightPosition,
  property1FeatureCardLightTop,
  property1FeatureCardLightLeft,
}) => {
  const property1FeatureCardLightStyle = useMemo(() => {
    return {
      width: property1FeatureCardLightWidth,
      position: property1FeatureCardLightPosition,
      top: property1FeatureCardLightTop,
      left: property1FeatureCardLightLeft,
    };
  }, [
    property1FeatureCardLightWidth,
    property1FeatureCardLightPosition,
    property1FeatureCardLightTop,
    property1FeatureCardLightLeft,
  ]);

  return (
    <div
      className="property-1feature-card-light"
      style={property1FeatureCardLightStyle}
    >
      <img className="icons47" alt="" src={icons} />
      <b className="integration-ecosystem">{heading}</b>
      <div className="body-parent">
        <div className="body9">
          <p className="track-your-progress">{trackYourProgressAndMotiv}</p>
          <p className="track-your-progress">{yourEffortsEveryday}</p>
        </div>
        <CTANoBackground1
          text="Learn more"
          icons="/icons3.svg"
          cTANoBackgroundWidth="107px"
          cTANoBackgroundHeight="21px"
          getForFreeFontWeight="unset"
          getForFreeFontFamily="Inter"
          getForFreeLetterSpacing="-0.01em"
          getForFreeLineHeight="23px"
        />
      </div>
    </div>
  );
};

export default Property1FeatureCardLight;
