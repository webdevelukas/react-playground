import React from "react";
import Pricing from "./Pricing";
import Euro from "../Icons/Euro";

export default function Price({ value }) {
  return (
    <Pricing>
      <Euro />
      <Euro isGrey={value < 2} />
      <Euro isGrey={value < 3} />
    </Pricing>
  );
}
