import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderOneSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`single-slider slider-height-1 bg-purple ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
      <img
        className="animated img-fluid"
        src={process.env.PUBLIC_URL + data.image}
        alt=""
      />
    </div>
  );
};

HeroSliderOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string,
};

export default HeroSliderOneSingle;
