import {Grid, makeStyles, Typography } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { API_URL } from "../constants";
import {
  School,
  Accessible,
  PeopleOutline,
  ChromeReaderMode,
  Face,
  Assessment,
  Settings,
  PostAdd,
  RecordVoiceOver,
} from "@material-ui/icons";
import { getHeaderContentAction } from "../examination/dashboard/DashboardActions";
import { GET_HEADER_CONTENT_RESET } from "../examination/dashboard/DashboardConstants";

const useStyles = makeStyles({
  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: "0",
    height: "100%",
    width: "15%",
    backgroundColor: "#253053",
    position: "fixed",
    "& h6": {
      fontSize: "13px",
      padding: "13px 13px 13px 20px",
      color: "#fff",
      display: "inline-flex",
      width: "100%",
    },
    "& h6:hover": {
      backgroundColor: "rgba(255, 255, 255, 0.3)",
      textDecoration: "none",
    },
    "& a:hover": { textDecoration: "none" },
  },
});

const SideMenu = () => {
  const classes = useStyles();


  const dispatch = useDispatch();


  const { headerContent, error: headerContentError } = useSelector(
    (state) => state.getHeaderContent
  );


  useEffect(() => {
    if (!headerContent) {
      dispatch(getHeaderContentAction());
    }
  }, [headerContent, dispatch]);
  // if (headerContentError) {
  //   dispatch({ type: GET_HEADER_CONTENT_RESET });
  //   setNotify({
  //     isOpen: true,
  //     message: headerContentError,
  //     type: "error",
  //   });
  // }
  const isActive = {
    color: "#253053",
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    textDecoration: "none",
  };
  return (
    <div className={classes.sideMenu}>
      <Typography
        variant="h5"
        style={{ color: "#fff", textAlign: "center", padding: " 17px 0" }}
      >
      <Grid item style={{ alignSelf: "center" }}>
                {headerContent && (
                  <img
                    src={`${API_URL}${headerContent.FullPathSchoolLogo}`}
                    height="50px"
                  />
                )}
              </Grid>
        {/* TEACHER MIS */}
      </Typography>
      <NavLink to={"/"} exact={true} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <ChromeReaderMode fontSize="small" />
          &nbsp;&nbsp;&nbsp; DashBoard
        </Typography>
      </NavLink>
      <NavLink to={"/academic-grading"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <School fontSize="small" />
          &nbsp;&nbsp;&nbsp; Academic Grading
        </Typography>
      </NavLink>
      <NavLink to={"/exam-division"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Accessible fontSize="small" />
          &nbsp;&nbsp;&nbsp; Exam Division
        </Typography>
      </NavLink>
      {/* <NavLink to={"/exam-schedule"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <PeopleOutline fontSize="small" />
          &nbsp;&nbsp;&nbsp; Exam Schedule
        </Typography>
      </NavLink> */}

      <NavLink to={"/attendance"} activeStyle={isActive}>
        <Typography variant="h6">
          <Assessment fontSize="small" />
          &nbsp;&nbsp;&nbsp; Attendance
        </Typography>
      </NavLink>
      <NavLink to={"/pid"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Settings fontSize="small" />
          &nbsp;&nbsp;&nbsp; Pid
        </Typography>
      </NavLink>
      {/* <NavLink to={"/quick-links"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Face fontSize="small" />
          &nbsp;&nbsp;&nbsp; Quick Links
        </Typography>
      </NavLink> */}
      <NavLink to={"/resources"} activeStyle={isActive}>
        <Typography variant="h6">
          <PostAdd fontSize="small" />
          &nbsp;&nbsp;&nbsp; Resources
        </Typography>
      </NavLink>
      <NavLink to={"/class-schedule"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <PeopleOutline fontSize="small" />
          &nbsp;&nbsp;&nbsp; Class Routine
        </Typography>
      </NavLink>
      <NavLink to={"/assignment"} activeStyle={isActive}>
        <Typography variant="h6">
          <PostAdd fontSize="small" />
          &nbsp;&nbsp;&nbsp; Assignment
        </Typography>
      </NavLink>
      <NavLink to={"/exam-mark-approval"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Accessible fontSize="small" />
          &nbsp;&nbsp;&nbsp; Exam Mark Entry
        </Typography>
      </NavLink>
      <NavLink to={"/syllabus"} activeStyle={isActive}>
        <Typography variant="h6">
          <RecordVoiceOver fontSize="small" />
          &nbsp;&nbsp;&nbsp; Syllabus
        </Typography>
      </NavLink>
      <NavLink to={"/old-questions"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Accessible fontSize="small" />
          &nbsp;&nbsp;&nbsp; Old Questions
        </Typography>
      </NavLink>
      <NavLink to={"/notification"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Accessible fontSize="small" />
          &nbsp;&nbsp;&nbsp; Notification
        </Typography>
      </NavLink>
      <NavLink to={"/announcement"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Accessible fontSize="small" />
          &nbsp;&nbsp;&nbsp; Announcement
          </Typography>
      </NavLink>
      <NavLink to={"/holiday"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Accessible fontSize="small" />
          &nbsp;&nbsp;&nbsp; Holiday

        </Typography>
      </NavLink>
      <NavLink to={"/video-conference"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Accessible fontSize="small" />
          &nbsp;&nbsp;&nbsp; Video Conference
        </Typography>
      </NavLink>
    </div>
  );
};

export default SideMenu;
