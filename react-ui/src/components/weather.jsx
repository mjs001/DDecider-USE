import React from "react";

const WeatherApp = props => {
  return (
    <div className="container">
      <div className="cards">
        <h1>
          {props.city}, {props.country}
        </h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-4`}></i>
        </h5>
        <h4 className="py-2">{props.temp_fahrenheit}&deg;</h4>
        {/** show max and min temp */}
        {minMaxTemp(props.temp_min, props.temp_max)}
        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

function minMaxTemp(min, max) {
  return (
    <h4>
      <span className="px-4">{min}&deg;</span>
      <span className="px-4">{max}&deg;</span>
    </h4>
  );
}

export default WeatherApp;
