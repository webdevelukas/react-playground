import React from "react";
import ActionButton from "../components/ActionButton";
import Done from "../Icons/Done";
import Cancel from "../Icons/Cancel";
import Add from "../Icons/Add";
import ActionStar from "../Icons/Star";

export default {
  title: "ActionButton"
};

export function SubmitButton() {
  return (
    <ActionButton>
      <Done />
    </ActionButton>
  );
}

export function CancelButton() {
  return (
    <ActionButton>
      <Cancel />
    </ActionButton>
  );
}

export function AddButton() {
  return (
    <ActionButton>
      <Add value="1" />
    </ActionButton>
  );
}

export function StarButton() {
  return (
    <ActionButton>
      <ActionStar />
    </ActionButton>
  );
}
