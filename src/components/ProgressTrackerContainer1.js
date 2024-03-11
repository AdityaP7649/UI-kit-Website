import Property1BarDark from "./Property1BarDark";
import Property1FeatureCardLight from "./Property1FeatureCardLight";
import "./ProgressTrackerContainer1.css";

const ProgressTrackerContainer1 = () => {
  return (
    <div className="product6">
      <div className="product-inner" />
      <div className="frame-parent17">
        <div className="tag-parent6">
          <Property1BarDark
            text="Boost your productivity"
            property1BarDarkWidth="233px"
            property1BarDarkBorder="1px solid var(--color-gray-600)"
            version20IsColor="#000"
            version20IsBackground="unset"
            version20IsWebkitBackgroundClip="unset"
            version20IsWebkitTextFillColor="unset"
          />
          <div className="tag-parent6">
            <b className="h211">A more effective way to track progress</b>
            <div className="body12">
              Effortlessly turn your ideas into a fully functional, responsive,
              no-code SaaS website in just minutes with the set of free
              components for Framer.
            </div>
          </div>
        </div>
        <img
          className="product-image-icon2"
          alt=""
          src="/product-image@2x.png"
        />
        <div className="grid2">
          <Property1FeatureCardLight
            icons="/icons2.svg"
            heading="Integration ecosystem"
            trackYourProgressAndMotiv="Track your progress and motivate"
            yourEffortsEveryday="your efforts everyday."
            property1FeatureCardLightWidth="260px"
            property1FeatureCardLightPosition="absolute"
            property1FeatureCardLightTop="0px"
            property1FeatureCardLightLeft="calc(50% - 550px)"
          />
          <Property1FeatureCardLight
            icons="/icons4.svg"
            heading="Secure data encryption"
            trackYourProgressAndMotiv="Ensure your data’s safety with top-"
            yourEffortsEveryday="tier encryption."
            property1FeatureCardLightWidth="260px"
            property1FeatureCardLightPosition="absolute"
            property1FeatureCardLightTop="0px"
            property1FeatureCardLightLeft="calc(50% + 10px)"
          />
          <Property1FeatureCardLight
            icons="/icons5.svg"
            heading="Goal setting and tracking"
            trackYourProgressAndMotiv="Set and track goals with"
            yourEffortsEveryday="manageable task breakdowns."
            property1FeatureCardLightWidth="260px"
            property1FeatureCardLightPosition="absolute"
            property1FeatureCardLightTop="0px"
            property1FeatureCardLightLeft="calc(50% - 270px)"
          />
          <Property1FeatureCardLight
            icons="/icons6.svg"
            heading="Customizable notifications"
            trackYourProgressAndMotiv="Get alerts on tasks and deadlines"
            yourEffortsEveryday="that matter most."
            property1FeatureCardLightWidth="260px"
            property1FeatureCardLightPosition="absolute"
            property1FeatureCardLightTop="0px"
            property1FeatureCardLightLeft="calc(50% + 290px)"
          />
        </div>
      </div>
    </div>
  );
};

export default ProgressTrackerContainer1;
