import { useMemo } from "react";
import "./Testimonial.css";

const Testimonial = ({
  testimonial = "As a seasoned designer always on the lookout for innovative tools, Framer.com instantly grabbed my attention.",
  ellipse1,
  name1 = "Alex Rivera",
  socialTag = "@jamietechguru00",
  testimonialPosition,
  testimonialTop,
  testimonialLeft,
}) => {
  const testimonialStyle = useMemo(() => {
    return {
      position: testimonialPosition,
      top: testimonialTop,
      left: testimonialLeft,
    };
  }, [testimonialPosition, testimonialTop, testimonialLeft]);

  return (
    <div className="testimonial" style={testimonialStyle}>
      <div className="as-a-seasoned">{testimonial}</div>
      <div className="ellipse-parent">
        <img className="frame-child" alt="" src={ellipse1} />
        <div className="alex-rivera-parent">
          <div className="alex-rivera">{name1}</div>
          <div className="jamietechguru00">{socialTag}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
