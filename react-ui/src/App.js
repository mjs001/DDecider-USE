import React from "react";
import "./App.css";
import WeatherApp from "./components/weather.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "weather-icons/css/weather-icons.css";
import Form from "./components/form.component";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import Step1 from "./components/generalPageStyling";
import OverallDecider from "./components/OverallDecider";
import restaurantLocator from "./components/restaurantLocator";
import "./components/Navigation.css";
// api call api.openweathermap.org/data/2.5/weather?q=London,uk
const API_key = "99c5fcadf6e8ae94203e609d9c409ee5";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      zipCode: undefined,
      country: undefined,
      icon: undefined,
      main: undefined,
      fahrenheit: undefined,
      temp_max: undefined,
      temp_min: undefined,
      description: "",
      error: false,
      results: undefined
    };

    this.weatherIcon = {
      Thunderstorm: "wi-thunderstorm",
      Drizzle: "wi-sleet",
      Rain: "wi-storm-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds: "wi-day-fog"
    };
  }

  calFahrenheit(temp) {
    let F = Math.floor((temp * 9) / 5 - 459.67);
    return F;
  }

  get_WeatherIcon(icons, rangeID) {
    switch (true) {
      case rangeID >= 200 && rangeID <= 232:
        this.setState({ icon: this.weatherIcon.Thunderstorm });

        break;
      case rangeID >= 300 && rangeID <= 321:
        this.setState({ icon: this.weatherIcon.Drizzle });

        break;
      case rangeID >= 500 && rangeID <= 531:
        this.setState({ icon: this.weatherIcon.Rain });

        break;
      case rangeID >= 600 && rangeID <= 622:
        this.setState({ icon: this.weatherIcon.Snow });

        break;
      case rangeID >= 701 && rangeID <= 781:
        this.setState({ icon: this.weatherIcon.Atmosphere });

        break;
      case rangeID === 800:
        this.setState({ icon: this.weatherIcon.Clear });

        break;
      case rangeID >= 801 && rangeID <= 804:
        this.setState({ icon: this.weatherIcon.Clouds });

        break;
      default:
        this.setState({ icon: this.weatherIcon.Clouds });
    }
  }

  getWeather = async e => {
    e.preventDefault();

    const zip = e.target.elements.zip.value;
    const country = e.target.elements.country.value;
    if (zip && country) {
      const api_call = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?zip=${zip},${country}&appid=${API_key}`
      );
      const response = await api_call.json();

      console.log(response);

      this.setState({
        zip: `${response.name}, ${response.sys.country}`,
        country: response.sys.country,
        fahrenheit: this.calFahrenheit(response.main.temp),
        temp_max: this.calFahrenheit(response.main.temp_max),
        temp_min: this.calFahrenheit(response.main.temp_min),
        description: response.weather[0].description
      });

      this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);
    } else {
      this.setState({ error: true });
    }
  };

  render() {
    return (
      <>
        <div className="App">
          <Form loadweather={this.getWeather} error={this.state.error} />
          <WeatherApp
            zip={this.state.zip}
            country={this.state.country}
            temp_fahrenheit={this.state.fahrenheit}
            temp_max={this.state.temp_max}
            temp_min={this.state.temp_min}
            description={this.state.description}
            weatherIcon={this.state.icon}
          />
        </div>
      </>
    );
  }
}

export default App;
