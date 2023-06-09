import React, { useState } from "react";
import "./style.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Delete from "../../Assets/Delete.png";
import CalendarIcon from "../../Assets/Calendar.png";
import plus from "../../Assets/plus.png";

const Popup = ({ modalOpen, handleCloseModal, handleOpenModal }) => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(false);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };
  return (
    <>
      {modalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <div className="header">
                <div>Add period</div>
                <div>
                  <button className="modal-close" onClick={handleCloseModal}>
                    &times;
                  </button>
                </div>
              </div>
              <div>
                <div className="label">Period Name</div>
                <div className="period-input">
                  <input
                    className="period-name"
                    label="Period Name"
                    placeholder="Enter Period Name"
                  ></input>
                </div>
              </div>
              <div className="time-row">
                <div>
                  <div className="label">Start Time</div>
                  <div className="start-time">
                    <input label="start-time" placeholder="start-time"></input>
                  </div>
                </div>
                <div>
                  <div className="label">End Time </div>
                  <input
                    className="start-time"
                    label="end-time"
                    placeholder="end-time"
                  ></input>
                </div>
              </div>
              <div className="week-row">
                <div className="label">Repeat On Days </div>
                <div className="week">
                  <div className="week-day">S</div>
                  <div className="week-day">M</div>
                  <div className="week-day selected-week">T</div>
                  <div className="week-day">W</div>
                  <div className="week-day">T</div>
                  <div className="week-day selected-week">F</div>
                  <div className="week-day">S</div>
                </div>
              </div>
              <div>
                <div className="label">From</div>
                <div
                  className="period-input"
                  onClick={() => {
                    setShowCalendar(!showCalendar);
                  }}
                >
                  <img src={CalendarIcon}></img>
                  <input
                    className="period-name"
                    label="Period Name"
                    placeholder="27 March - 28 March 2023"
                  ></input>
                </div>
                {showCalendar && (
                  <div className="calendar-container">
                    <Calendar
                      className="calendar-cell"
                      value={startDate}
                      onChange={handleStartDateChange}
                    />
                    <Calendar
                      className="calendar-cell"
                      value={endDate}
                      onChange={handleEndDateChange}
                    />
                  </div>
                )}
              </div>
              <div className="last-row">
                <div className="colors">
                  <div className="color pink"></div>
                  <div className="color blue"></div>
                  <div className="color  green"></div>
                  <div className="color yellow"></div>
                </div>

                <div className="btn-row">
                  <img src={Delete}></img>
                  <div className="btn-add">
                    <img src={plus}></img>Add Period
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
