import React from "react";
import Ratings from "./Ratings";
import Star from "../Icons/Star";
import PropTypes from "prop-types";

export default function Rate({ value }) {
  return (
    <Ratings>
      <Star />
      &nbsp; {value}
    </Ratings>
  );
}

Rate.propTypes = {
  value: PropTypes.number
};
