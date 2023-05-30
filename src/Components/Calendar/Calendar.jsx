import React, { useState, useEffect } from "react";
import "./style.css";
import Popup from "../Modal/Modal";
import plusIcon from "../../Assets/plus.png";

const Calendar = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [date, setDate] = useState(new Date());
  const [sevendays, setSevenDays] = useState([]);
  const weeks = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const timeArr = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
  ];

  const handleOpenModal = () => {
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    getDateDetails();
  }, []);

  const getDateDetails = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const tempSevendays = [];

    for (let i = 0; i < 7; i++) {
      const nextDate = new Date(
        currentDate.getTime() + 24 * 60 * 60 * 1000 * i
      ).getDate();
      const nextDay = new Date(
        currentDate.getTime() + 24 * 60 * 60 * 1000 * i
      ).getDay();

      tempSevendays.push({ date: nextDate, day: nextDay });
    }
    console.log(tempSevendays);
    setSevenDays(tempSevendays);
  };
  return (
    <>
      <div className="calendar">
        <div className="date-row">
          <div className="date">
            <div className="month-date">April 10-17</div>
            <div className="today">
              <div>{"<"}</div>
              <div>Today</div>
              <div>{">"}</div>
            </div>
          </div>
          <div className="add-button" onClick={handleOpenModal}>
            <div>
              <img src={plusIcon}></img>
            </div>
            <div>Add Period</div>
          </div>
        </div>
        <Popup
          modalOpen={modalOpen}
          handleCloseModal={handleCloseModal}
          handleOpenModal={handleOpenModal}
        />
        <div>
          <table className="calendar-table">
            <tr className="heading-row">
              <th>
                <div className="heading-cell"></div>
              </th>
              {sevendays.map((val, i) => {
                return (
                  <>
                    <th>
                      <div className="heading-cell">
                        <div className="week ">{weeks[val.day]}</div>
                        <div
                          className={`date-blue ${i == 0 ? "active-date" : ""}`}
                        >
                          {val.date}
                        </div>
                      </div>
                    </th>
                  </>
                );
              })}
            </tr>

            <tr className="divider">
              <td className="time-column">1</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            {timeArr.map((time, i) => {
              return (
                <tr className="divider">
                  <td className="time-column">
                    <div className="time">
                      <span>{time}</span>
                    </div>
                  </td>
                  <td>
                    {i == 2 ? (
                      <div className="highlight-cell red">
                        <div className="period">Period 1</div>
                        <div className="duration">09:00 - 10:00</div>
                        <div className="activity-red">Activity 1</div>
                      </div>
                    ) : i == 4 ? (
                      <div className="highlight-cell blue">
                        <div className="period">Period 1</div>
                        <div className="duration">09:00 - 10:00</div>
                        <div className="activity-blue">Activity 1</div>
                        <div className="activity-blue">Activity 1</div>
                      </div>
                    ) : i == 6 ? (
                      <div className="highlight-cell yellow">
                        <div className="period">Period 1</div>
                        <div className="duration">09:00 - 10:00</div>
                      </div>
                    ) : i == 9 ? (
                      <div className="highlight-cell green">
                        <div className="period">Period 1</div>
                        <div className="duration">09:00 - 10:00</div>
                      </div>
                    ) : (
                      ""
                    )}
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
    </>
  );
};
export default Calendar;
