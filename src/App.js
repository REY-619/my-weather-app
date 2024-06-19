import React, { useState } from "react";
import Header from "./components/Header";
import WeatherAlert from "./components/WeatherAlert";
import WeatherStories from "./components/WeatherStories";
import UserGroupView from "./components/UserGroupView";
import EventPlannerView from "./components/EventPlannerView";
import FarmerView from "./components/FarmerView";
import TravelerView from "./components/TravelerView";

const App = () => {
  const [userGroup, setUserGroup] = useState("general");

  return (
    <div className="app">
      <Header setUserGroup={setUserGroup} />
      <WeatherAlert />
      <UserGroupView userGroup={userGroup} />
      <WeatherStories />
    </div>
  );
};

export default App;
