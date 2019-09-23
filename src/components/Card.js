import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const CardLayout = styled.article`
  display: flex;
  width: 360px;
  height: 133px;
  background-color: rgba(222, 222, 222, 0.3);
  border-radius: 10px;
  color: black;
  box-shadow: 0px 0px 10px rgba(10, 10, 10, 0.2);
`;

export default function Card({ children }) {
  return <CardLayout>{children}</CardLayout>;
}

Card.propTypes = {
  children: PropTypes.element
};
