import React from "react";

const Header = ({ setUserGroup }) => {
  return (
    <header>
      <h1>Weather Dashboard</h1>
      <nav>
        <button onClick={() => setUserGroup("eventPlanner")}>
          Event Planner
        </button>
        <button onClick={() => setUserGroup("farmer")}>Farmer</button>
        <button onClick={() => setUserGroup("traveler")}>Traveler</button>
        <button onClick={() => setUserGroup("general")}>General</button>
      </nav>
    </header>
  );
};

export default Header;
