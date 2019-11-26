import React from "react";

const WeatherApp = props => {
  return (
    <div className="container">
      <div className="cards pt-4">
        <h1>{props.zip}</h1>
        <h5 className="py-4">
          <i className={`wi ${props.weatherIcon} display-4`}></i>
        </h5>
        {props.temp_fahrenheit ? (
          <h1 className="py-2">{props.temp_fahrenheit}&deg;</h1>
        ) : null}
        {/** show max and min temp */}
        {minMaxTemp(props.temp_min, props.temp_max)}
        <h4 className="py-3">{props.description}</h4>
      </div>
    </div>
  );
};

function minMaxTemp(min, max) {
  if (min && max) {
    return (
      <h4>
        <span className="px-4">{min}&deg;</span>
        <span className="px-4">{max}&deg;</span>
      </h4>
    );
  }
}

export default WeatherApp;
