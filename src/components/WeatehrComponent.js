import React, { useState, useEffect } from "react";
import RenderCard from "./RenderCardComponent";

const WeatherCard = (params) => {
  const KEY = "58e32a6890274c92881235333202406";
  const CITY = "Salvador";
  const URL = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${CITY}`;
  const [data, setData] = useState();

  useEffect(() => {
    const start = async () => {
      const { current, location } = await fetch(URL).then((res) => res.json());
      setData({ current, location });
    };
    start();
  });

  if (data !== undefined) {
    return <RenderCard current={data.current} location={data.location}></RenderCard>;
  } else {
    return <></>;
  }
};

export default WeatherCard;
