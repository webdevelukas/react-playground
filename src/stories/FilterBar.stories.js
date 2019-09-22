import React from "react";
import FilterBar from "../components/FilterBar";

export default {
  title: "FilterBar"
};

export function FirstButtonSelectedFilterBar() {
  return <FilterBar selected="0" />;
}

export function SecondButtonSelectedFilterBar() {
  return <FilterBar selected="1" />;
}

export function ThirdButtonSelectedFilterBar() {
  return <FilterBar selected="2" />;
}

export function FourthButtonSelectedFilterBar() {
  return <FilterBar selected="3" />;
}
