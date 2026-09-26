"use client";

import React, { createContext, useState } from "react";

export const WorkoutsContext = createContext(null);

const WorkoutProvider = ({ children }) => {
  const [addToday, setAddToday] = useState([]);
  const [saved, setSaved] = useState([]);

  const [activeTab, setActiveTab] = useState("today");

  const sharedData = {
    addToday,
    setAddToday,
    saved,
    setSaved,
    activeTab,
    setActiveTab,
  };

  return (
    <WorkoutsContext.Provider value={sharedData}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export default WorkoutProvider;
