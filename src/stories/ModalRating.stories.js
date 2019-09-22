import React from "react";

import ModalRating from "../components/ModalRating";
import RatingStar from "../components/ModalRatingButton";

export default { title: "Modal Content" };

export const RatingStarActive = () => <RatingStar active={true} />;
export const RatingStarInactive = () => <RatingStar active={false} />;

export const ModalRatingLow = () => <ModalRating stars={2} />;
export const ModalRatingHigh = () => <ModalRating stars={5} />;
