import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment, { months } from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getAllHolidayAction } from "./HolidayActions";
import { GET_ALL_HOLIDAY_RESET } from "./HolidayConstants";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Notification from "../../components/Notification";
import LoadingComp from "../../components/LoadingComp";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "75%",
    fontSize: "12px",
  },
  button: {
    position: "absolute",
    right: "10px",
  },
}));

const localizer = momentLocalizer(moment);

const Holiday = () => {
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });

  const classes = useStyles();

  const dispatch = useDispatch();

  const { holiday, error, loading } = useSelector((state) => state.holiday);

  if (error) {
    setNotify({
      isOpen: true,
      message: error,
      type: "error",
    });
    dispatch({ type: GET_ALL_HOLIDAY_RESET });
  }

  // useEffect(() => {
  //   if (!holiday) {
  //     dispatch(getAllHolidayAction());
  //   }
  // }, [dispatch, holiday]);
  useEffect(() => {
    dispatch(getAllHolidayAction());
  }, []);

  return (
    <>
      <div
        style={{
          margin: "40px",
          padding: "40px",
          backgroundColor: "#fff",
          borderRadius: "10px",
          boxShadow: "5px 5px 5px #d4d4d4",
        }}
      >
        {loading ? (
          <LoadingComp />
        ) : (
          <>
            <Calendar
              localizer={localizer}
              events={holiday && holiday.att_HRHolidayModelLst}
              startAccessor="FromDate"
              endAccessor="ToDate"
              titleAccessor="HolidayName"
              views={months}
              style={{ height: "60vh" }}
            />
          </>
        )}
      </div>

      <Notification notify={notify} setNotify={setNotify} />
    </>
  );
};

export default Holiday;
