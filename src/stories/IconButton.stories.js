import React from "react";
import IconButton from "../components/IconButton";
import Walk from "../Icons/Walk";
import Star from "../Icons/Star";
import Euro from "../Icons/Euro";
import Food from "../Icons/Food";

export default {
  title: "IconButton"
};

export function ActiveWalkButton() {
  return (
    <IconButton active={true}>
      <Walk />
    </IconButton>
  );
}

export function ActiveStarButton() {
  return (
    <IconButton active={true}>
      <Star />
    </IconButton>
  );
}

export function ActiveEuroButton() {
  return (
    <IconButton active={true}>
      <Euro />
    </IconButton>
  );
}

export function ActiveFoodButton() {
  return (
    <IconButton active={true}>
      <Food />
    </IconButton>
  );
}
export function InactiveWalkButton() {
  return (
    <IconButton active={false}>
      <Walk />
    </IconButton>
  );
}

export function InactiveStarButton() {
  return (
    <IconButton active={false}>
      <Star />
    </IconButton>
  );
}

export function InactiveEuroButton() {
  return (
    <IconButton active={false}>
      <Euro />
    </IconButton>
  );
}

export function InactiveFoodButton() {
  return (
    <IconButton active={false}>
      <Food />
    </IconButton>
  );
}
