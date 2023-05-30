import "./style.css";
import React from "react";
import searchIcon from "../../Assets/search.png";


const PlanningPanel = () => {
  return (
    <>
      <div className="main">
        <div className="row">
          <div className="planning-nav">
            <span>Project Planning</span>
            <span className="active">Weekly Planning</span>
            <span>Planning insights</span>
          </div>
          <div className="search-bar">
            <div className="search-icon">
              <img src={searchIcon}></img>
            </div>
            <div>
              <input
                className="search-input"
                placeholder="Search for projects"
              ></input>
            </div>
          </div>
        </div>
        <div className="seperator"></div>
      </div>
    </>
  );
};

export default PlanningPanel;
