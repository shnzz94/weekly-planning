import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import PlanningPanel from "../../Components/PlanningPanel/PlanningPanel";
import Calendar from "../../Components/Calendar/Calendar";
import "../../App.css";
const Home = () => {
  return (
    <>
      <Navbar />
      <PlanningPanel />
      <Calendar />
    </>
  );
};

export default Home;
