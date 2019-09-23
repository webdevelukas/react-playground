import React from "react";
import Distancing from "./Distancing";
import Walk from "../Icons/Walk";
import PropTypes from "prop-types";

export default function Distance({ value }) {
  return (
    <Distancing>
      <Walk />
      &nbsp; {value} Min.
    </Distancing>
  );
}

Distance.propTypes = {
  value: PropTypes.number
};
