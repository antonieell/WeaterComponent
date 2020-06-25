import React, { useState, useEffect } from "react";

function RenderCard({ current, location }) {
  return (
    <div className="container">
      <img src={`http:${current.condition.icon}`} alt={current.condition.text}></img>
      <h4>{`${location.name} - ${location.region}, ${location.country}`}</h4>
      <h4>{current.condition.text}</h4>
      <p>{current.temp_c} °C</p>
      <p>{current.feelslike_c} °C</p>
    </div>
  );
}

export default RenderCard;
