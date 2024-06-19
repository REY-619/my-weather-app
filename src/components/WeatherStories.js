import React, { useState } from "react";

const WeatherStories = () => {
  const [stories, setStories] = useState([]);
  const [newStory, setNewStory] = useState("");

  const handleStorySubmit = () => {
    setStories([...stories, newStory]);
    setNewStory("");
  };

  return (
    <div className="weather-stories">
      <h2>Weather Stories</h2>
      <div>
        <input
          type="text"
          value={newStory}
          onChange={(e) => setNewStory(e.target.value)}
          placeholder="Share your weather story"
        />
        <button onClick={handleStorySubmit}>Submit</button>
      </div>
      <ul>
        {stories.map((story, index) => (
          <li key={index}>{story}</li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherStories;
