import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

//background-color:#FFFFFF;   border-radius: 10px; width: 360px; height: 315px;

const Dialog = styled.dialog`
  width: 360px;
  height: 315px;
  border-radius: 10px;
  border: none;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.16);
`;

// Property: visible=true -> show dialog

export default function Modal({ children, visible }) {
  return <Dialog open={true}>{children}</Dialog>;
}

Modal.propTypes = {
  open: PropTypes.bool,
  children: PropTypes.element
};
