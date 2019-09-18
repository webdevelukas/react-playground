import React from "react";
import styled from "styled-components";

const Headline = styled.h1`
  color: ${props => props.color};
`;

function Header({ color }) {
  return <Headline color={color}>Tescht</Headline>;
}

export default Header;
