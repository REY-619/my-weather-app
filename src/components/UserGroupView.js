import React from "react";
import EventPlannerView from "./EventPlannerView";
import FarmerView from "./FarmerView";
import TravelerView from "./TravelerView";

const UserGroupView = ({ userGroup }) => {
  switch (userGroup) {
    case "eventPlanner":
      return <EventPlannerView />;
    case "farmer":
      return <FarmerView />;
    case "traveler":
      return <TravelerView />;
    default:
      return <p>Please select a user group to see specific information.</p>;
  }
};

export default UserGroupView;
