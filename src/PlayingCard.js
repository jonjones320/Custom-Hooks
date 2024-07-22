import React, { useState } from "react";
import backOfCard from "./back.png";
import useCardFlip from "./hooks/useFlip"
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [isFacingUp, setCardFlip] = useCardFlip(true);
  return (
    <img
      src={isFacingUp ? front : back}
      alt="playing card"
      onClick={setCardFlip}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
