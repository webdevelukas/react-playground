import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Badge = styled.div`
  display: inline-block;
  background: ${props =>
    props.active ? "rgba(84, 127, 179, 1)" : "rgba(255, 255, 255, 1)"};
  border-radius: 5px;
  padding: 3px 10px;
  border: ${props => (props.active ? "" : "solid 1px rgba(84, 127, 179, 1)")};
  color: ${props =>
    props.active ? "rgba(255, 255, 255, 1)" : "rgba(84, 127, 179, 1)"};
`;

export default function ColoredBadge({
  active = true,
  children = "Asiatisch"
}) {
  return <Badge active={active}>{children}</Badge>;
}

ColoredBadge.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.element
};
