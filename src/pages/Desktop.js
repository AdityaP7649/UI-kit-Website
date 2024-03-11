import Property1LightmodeBar from "../components/Property1LightmodeBar";
import Property1Default from "../components/Property1Default";
import ProductivityContainer from "../components/ProductivityContainer";
import ContainerLogoTicker from "../components/ContainerLogoTicker1";
import ProgressTrackerContainer1 from "../components/ProgressTrackerContainer1";
import StreamlinedContainer from "../components/StreamlinedContainer";
import ProgressTrackerContainer from "../components/ProgressTrackerContainer";
import Property1BarDark from "../components/Property1BarDark";
import Testimonial from "../components/Testimonial";
import SignUpContainer from "../components/SignUpContainer";
import SecurityContainer from "../components/SecurityContainer";
import "./Desktop.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <div className="stack">
        <Property1LightmodeBar
          text="This page is included in a free SaaS Website Kit."
          link="View the complete Kit"
          showThisPageIs
          property1LightmodeBarWidth="2082px"
          frameDivAlignSelf="stretch"
          frameDivWidth="486px"
        />
        <Property1Default
          property1DefaultBackgroundColor="#eaeefe"
          property1DefaultWidth="2045px"
        />
        <ProductivityContainer />
        <ContainerLogoTicker />
        <ProgressTrackerContainer1 />
        <StreamlinedContainer />
        <ProgressTrackerContainer />
        <div className="testimonials">
          <div className="tag-parent">
            <Property1BarDark
              text="Testimonials"
              property1BarDarkWidth="101px"
              property1BarDarkBorder="1px solid var(--color-gray-600)"
              version20IsColor="#000"
              version20IsBackground="unset"
              version20IsWebkitBackgroundClip="unset"
              version20IsWebkitTextFillColor="unset"
            />
            <div className="h2-wrapper">
              <b className="h2">What our users say</b>
            </div>
          </div>
          <Testimonial
            testimonial="As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention."
            ellipse1="/ellipse-16@2x.png"
            name1="Alex Rivera"
            socialTag="@jamietechguru00"
            testimonialPosition="absolute"
            testimonialTop="219px"
            testimonialLeft="105px"
          />
          <Testimonial
            testimonial="I was amazed at how quickly we were able to integrate this app into our workflow."
            ellipse1="/ellipse-112@2x.png"
            name1="Casey Jordan"
            socialTag="@caseyj"
            testimonialPosition="absolute"
            testimonialTop="219px"
            testimonialLeft="450px"
          />
          <Testimonial
            testimonial="Adopting this app for our team has streamlined our project management and improved communication across the board. "
            ellipse1="/ellipse-121@2x.png"
            name1="Jordan Patels"
            socialTag="@jpatelsdesign"
            testimonialPosition="absolute"
            testimonialTop="219px"
            testimonialLeft="795px"
          />
          <Testimonial
            testimonial="With this app, we can easily assign tasks, track progress, and manage documents all in one place."
            ellipse1="/ellipse-131@2x.png"
            name1="Sam Dawson"
            socialTag="@dawsontechtips"
            testimonialPosition="absolute"
            testimonialTop="477px"
            testimonialLeft="795px"
          />
          <Testimonial
            testimonial="Its user-friendly interface and robust features support our diverse needs."
            ellipse1="/ellipse-141@2x.png"
            name1="Casey Harper"
            socialTag="@casey09"
            testimonialPosition="absolute"
            testimonialTop="712px"
            testimonialLeft="796px"
          />
          <Testimonial
            testimonial="Planning and executing events has never been easier. This app helps me keep track of all the moving parts, ensuring nothing slips through the cracks."
            ellipse1="/ellipse-151@2x.png"
            name1="Taylor Kim"
            socialTag="@taylorkimm"
            testimonialPosition="absolute"
            testimonialTop="454px"
            testimonialLeft="450px"
          />
          <Testimonial
            testimonial="The customizability and integration capabilities of this app are top-notch."
            ellipse1="/ellipse-161@2x.png"
            name1="Riley Smith"
            socialTag="@rileysmith1"
            testimonialPosition="absolute"
            testimonialTop="735px"
            testimonialLeft="450px"
          />
          <Testimonial
            testimonial="This app has completely transformed how I manage my projects and deadlines."
            ellipse1="/ellipse-17@2x.png"
            name1="Morgan Lee"
            socialTag="@morganleewhiz"
            testimonialPosition="absolute"
            testimonialTop="712px"
            testimonialLeft="105px"
          />
          <Testimonial
            testimonial="Our team’s productivity has skyrocketed since we started using this tool. "
            ellipse1="/ellipse-18@2x.png"
            name1="Josh Smith"
            socialTag="@jjsmith"
            testimonialPosition="absolute"
            testimonialTop="477px"
            testimonialLeft="105px"
          />
          <div className="testimonials-child" />
        </div>
        <SignUpContainer />
        <SecurityContainer />
      </div>
    </div>
  );
};

export default Desktop;
