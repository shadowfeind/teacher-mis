import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";
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
        TEACHER MIS
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
      <NavLink to={"/exam-schedule"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <PeopleOutline fontSize="small" />
          &nbsp;&nbsp;&nbsp; Exam Schedule
        </Typography>
      </NavLink>

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
      <NavLink to={"/quick-links"} activeStyle={isActive}>
        <Typography variant="h6">
          {" "}
          <Face fontSize="small" />
          &nbsp;&nbsp;&nbsp; Quick Links
        </Typography>
      </NavLink>
      <NavLink to={"/resources"} activeStyle={isActive}>
        <Typography variant="h6">
          <PostAdd fontSize="small" />
          &nbsp;&nbsp;&nbsp; Resources
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
          &nbsp;&nbsp;&nbsp; Exam Mark Approval
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
    </div>
  );
};

export default SideMenu;
