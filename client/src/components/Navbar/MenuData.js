import React from "react";

export const MenuData = [
  {
    title: "Home",
    path: "/",
    cName: "nav-text",
    subRoutes: []
  },
  {
    title: "Population Indicators",
    path: "/population",
    cName: "nav-text",
    subRoutes: [
      {
        title: "Population",
        path: "/population_indicators/population",
        cName: "nav-text"
      },
      {
        title: "Economy",
        path: "/population_indicators/economy",
        cName: "nav-text"
      },
      {
        title: "Health",
        path: "/population_indicators/health",
        cName: "nav-text"
      },
      {
        title: "Education",
        path: "/population_indicators/Education",
        cName: "nav-text"
      }
    ]
  },
  {
    title: "Meta Data",
    path: "/metadata",
    cName: "nav-text",
    subRoutes: []
  },
  {
    title: "District Data",
    path: "/districtdata",
    cName: "nav-text",
    subRoutes: []
  },
  {
    title: "Docs Library & Reports",
    path: "/docsandreports",
    cName: "nav-text",
    subRoutes: []
  }
];
