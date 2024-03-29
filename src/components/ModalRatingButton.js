import React from "react";
import styled from "styled-components";
import Favorite from "../Icons/Favorite";
import PropTypes from "prop-types";

const RatingButton = styled.button`
  border: none;
  fill: ${props => (props.active ? "#547FB3" : "#BABABA")};
  padding: 0;
  height: 38px;
  width: 38px;
`;

export default function RatingStar({ active }) {
  return (
    <RatingButton active={active}>
      <Favorite />
    </RatingButton>
  );
}

RatingStar.propTypes = {
  active: PropTypes.bool
};
