import React from "react";
import styled from "styled-components";

const CardImg = styled.img`
  height: 130px;
  width: 120px;
  border-radius: 8px 0px 0px 8px;
  border: black solid 1px;
`;

export default function CardImage({ imgSrc }) {
  return <CardImg src={imgSrc} />;
}
