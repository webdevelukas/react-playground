import React from "react";
import styled from "styled-components";
import RatingStar from "./ModalRatingButton";

const ModalRatingContainer = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  height: 80px;
  width: 220px;
  overflow: auto;
  justify-content: space-between;
`;

// Property: visible=true -> show dialog

export default function ModalRating({ stars }) {
  return (
    <ModalRatingContainer>
      <li>
        <RatingStar active={1 <= stars} />
      </li>
      <RatingStar active={2 <= stars} />
      <li>
        <RatingStar active={3 <= stars} />
      </li>
      <RatingStar active={4 <= stars} />
      <li>
        <RatingStar active={5 <= stars} />
      </li>
    </ModalRatingContainer>
  );
}
