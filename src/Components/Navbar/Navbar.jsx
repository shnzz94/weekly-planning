import React from "react";
import "./style.css";
import PlanningIcon from "../../Assets/planning.png";
import DocumentationIcon from "../../Assets/documentation.png";
import HouseKeepingIcon from "../../Assets/houseKeeping.png";
import SearchIcon from "../../Assets/search.png";
import NotificationIcon from "../../Assets/notification.png";
import AvatarIcon from "../../Assets/avatar.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="left-nav">
          <span>Educator</span>
          <span className="arthshala">Arthshala</span>
        </div>
        <div className="middle-nav">
          <div className="middle-nav-item">
            <img src={PlanningIcon} className="middle-nav-icon" />
            <span>Planning</span>
          </div>
          <div className="middle-nav-item">
            <img src={DocumentationIcon} className="middle-nav-icon" />
            <span>Documentation</span>
          </div>
          <div className="middle-nav-item">
            <img src={HouseKeepingIcon} className="middle-nav-icon" />
            <span>HouseKeeping</span>
          </div>
        </div>
        <div className="right-nav">
          <img src={SearchIcon} className="middle-nav-icon" />
          <img src={NotificationIcon} className="middle-nav-icon" />
          <img src={AvatarIcon} className="middle-nav-icon" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
