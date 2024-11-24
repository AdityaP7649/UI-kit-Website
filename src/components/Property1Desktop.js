import { useMemo } from "react";
import LogoDefault from "./LogoDefault";
import "./Property1Desktop.css";

const Property1Desktop = ({
  property1DesktopPosition,
  property1DesktopTop,
  property1DesktopLeft,
  property1DesktopWidth,
}) => {
  const property1DesktopStyle = useMemo(() => {
    return {
      position: property1DesktopPosition,
      top: property1DesktopTop,
      left: property1DesktopLeft,
      width: property1DesktopWidth,
    };
  }, [
    property1DesktopPosition,
    property1DesktopTop,
    property1DesktopLeft,
    property1DesktopWidth,
  ]);

  return (
    <div className="property-1desktop" style={property1DesktopStyle}>
      <div className="frame-parent16">
        <div className="logodefault-group">
          <LogoDefault
            logosaas="/logosaas1@2x.png"
            logoDefaultPosition="relative"
          />
          <div className="effortlessly-turn-your1">
            Effortlessly turn your ideas into a fully functional, responsive,
            no-code SaaS website.
          </div>
        </div>
      </div>
      <div className="product-group">
        <div className="logodefault-group">
          <b className="product5">Product</b>
          <div className="features2">Features</div>
          <div className="features2">Integrations</div>
          <div className="features2">Updates</div>
          <div className="features2">FAQ</div>
          <div className="features2">Pricing</div>
        </div>
        <div className="logodefault-group">
          <b className="product5">Company</b>
          <div className="features2">About</div>
          <div className="features2">Blog</div>
          <div className="features2">Careers</div>
          <div className="features2">Manifesto</div>
          <div className="features2">Press</div>
          <div className="features2">Contact</div>
        </div>
        <div className="logodefault-group">
          <b className="product5">Resources</b>
          <div className="features2">Examples</div>
          <div className="features2">Community</div>
          <div className="features2">Guides</div>
          <div className="features2">Docs</div>
        </div>
        <div className="logodefault-group">
          <b className="product5">Legal</b>
          <div className="features2">Privacy</div>
          <div className="features2">Terms</div>
          <div className="features2">Security</div>
        </div>
      </div>
    </div>
  );
};

export default Property1Desktop;
