import React from "react";
import Ratings from "./Ratings";
import Star from "../Icons/Star";

export default function Rate({ value }) {
  return (
    <Ratings>
      <Star />
      &nbsp; {value}
    </Ratings>
  );
}
