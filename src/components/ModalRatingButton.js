import React from "react";
import styled from "styled-components";
import Favorite from "../Icons/Favorite";

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
      <Favorite height={"38px"} width={"38px"} />
    </RatingButton>
  );
}
