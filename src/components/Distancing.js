import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const DistancingDiv = styled.div`
  display: flex;
  margin: 2px;
  align-items: center;
  height: 24px;
  fill: #547fb3;
  color: black;
  background-color: white;
  border: none;
  font-size: 15px;
  font-family: Arial, Helvetica, sans-serif;
`;

export default function Distancing({ children }) {
  return <DistancingDiv>{children}</DistancingDiv>;
}

Distancing.propTypes = {
  children: PropTypes.element
};
