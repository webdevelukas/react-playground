import React from "react";
import styled from "styled-components";
import IconButton from "./IconButton";
import Walk from "../Icons/Walk";
import Star from "../Icons/Star";
import Euro from "../Icons/Euro";
import Food from "../Icons/Food";
import PropTypes from "prop-types";

const FilterBarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  width: 415px;
  height: 135px;
  position: sticky;
  align-items: center;
  justify-content: space-around;
  background-color: #fe6f61;
`;

export default function FilterBar({ selected }) {
  return (
    <FilterBarContainer>
      <IconButton active={"0" === selected}>
        <Walk />
      </IconButton>
      <IconButton active={"1" === selected}>
        <Star />
      </IconButton>
      <IconButton active={"2" === selected}>
        <Euro />
      </IconButton>
      <IconButton active={"3" === selected}>
        <Food />
      </IconButton>
    </FilterBarContainer>
  );
}

FilterBar.propTypes = {
  selected: PropTypes.string
};
