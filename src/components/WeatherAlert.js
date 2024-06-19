import React, { useEffect, useState } from "react";

const WeatherAlert = () => {
  const [location, setLocation] = useState("London");
  const [alert, setAlert] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=93ee36e7ae44c87c76c384d9aabf1b23`
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Log the entire data object to inspect it
        if (data.weather && data.weather.length > 0) {
          setAlert(data.weather[0]);
        } else {
          setAlert(null); // No alert available
        }
      })
      .catch((error) => console.error("Error fetching weather data:", error));
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };


  return (
    <div className="weather-alert">
      <input
        type="text"
        value={location}
        onChange={handleLocationChange}
        placeholder="Enter location"
      />
      <p>Enter the city you wanna Search</p>
      {alert ? (
        <div>
          <h2>Current Weather</h2>
          <p>Main: {alert.main}</p>
          <p>Description: {alert.description}</p>
        </div>
      ) : (
        <p>No weather data available at this time.</p>
      )}
    </div>
  );
};

export default WeatherAlert;
