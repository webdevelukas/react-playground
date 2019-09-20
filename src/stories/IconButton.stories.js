import React from "react";
import IconButton from "../components/IconButton";
import Walk from "../Icons/Walk";
import Euro from "../Icons/Euro";

export default {
  title: "IconButton"
};

export const WalkIcon = () => (
  <IconButton>
    <Walk />
  </IconButton>
);

export const EuroIcon = () => (
  <IconButton>
    <Euro />
  </IconButton>
);
