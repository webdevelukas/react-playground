import React from "react";
import Distance from "../components/Distance";
import Rate from "../components/Rate";
import Price from "../components/Price";

export default {
  title: "Details"
};

export const DistanceShort = () => <Distance value={3} />;

export const DistanceLong = () => <Distance value={6} />;

export const RateHigh = () => <Rate value={4.8} />;
export const RateLow = () => <Rate value={2.8} />;

export const PriceLow = () => <Price value={1} />;
export const PriceMedium = () => <Price value={2} />;
export const PriceHigh = () => <Price value={3} />;
