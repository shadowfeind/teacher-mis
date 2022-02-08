import React, { Suspense, lazy } from "react";
import "./App.css";
import Header from "./components/Header";
import SideMenu from "./components/SideMenu";
import {
  createTheme,
  CssBaseline,
  makeStyles,
  ThemeProvider,
} from "@material-ui/core";
import { HashRouter as Router, Link, Route, Switch } from "react-router-dom";

const Assignment = lazy(() => import("./examination/assignment/Assignment"));
const Attendance = lazy(() => import("./examination/attendance/Attendance"));
const Dashboard = lazy(() => import("./examination/dashboard/Dashboard"));
const Pid = lazy(() => import("./examination/pid/Pid"));
const QuickLinks = lazy(() => import("./examination/quickLinks/QuickLinks"));
const Resources = lazy(() => import("./examination/resources/Resources"));
const Syllabus = lazy(() => import("./examination/syllabus/Syllabus"));
const OldQuestions = lazy(() =>
  import("./examination/oldQuestions/OldQuestions")
);
const AcademicGrading = lazy(() =>
  import("./examination/academicGrading/AcademicGrading")
);
const ExamDivision = lazy(() =>
  import("./examination/examDivision/ExamDivision")
);
const ExamSchedule = lazy(() =>
  import("./examination/examSchedule/ExamSchedule")
);
const ClassSchedule = lazy(() =>
  import("./examination/classSchedule/ClassSchedule")
);
const ExamMarkEntry = lazy(() =>
  import("./examination/examMarkEntry/ExamMarkEntry")
);
const ExamMarkApprovalTeacher = lazy(() =>
  import("./examination/examMarkApprovalTeacher/ExamMarkApprovalTeacher")
);

const theme = createTheme({
  palette: {
    background: {
      default: "#eaeff5",
    },
  },
  MuiButtonRoot: {
    minWidth: "10px",
    fontSize: "12px",
  },
});

const useStyles = makeStyles({
  appMain: {
    paddingLeft: "15%",
    width: "100%",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          <Suspense fallback={<div></div>}>
            <Route path={"/exam-division"} component={ExamDivision} />
            <Route path={"/exam-schedule"} component={ExamSchedule} />
            <Route path={"/exam-mark-entry"} component={ExamMarkEntry} />
            <Route path={"/pid"} component={Pid} />
            <Route path={"/quick-links"} component={QuickLinks} />
            <Route path={"/resources"} component={Resources} />
            <Route path={"/syllabus"} component={Syllabus} />
            <Route path={"/class-schedule"} component={ClassSchedule} />
            <Route path={"/old-questions"} component={OldQuestions} />
            <Route path={"/attendance"} component={Attendance} />
            <Route path={"/exam-mark-approval"} component={ExamMarkApprovalTeacher} />
            <Route path={"/assignment"} component={Assignment} />
            <Route
              exact
              path={"/academic-grading"}
              component={AcademicGrading}
            />
            <Route exact path={"/"} component={Dashboard} />
          </Suspense>
        </div>
        <CssBaseline />
      </ThemeProvider>
    </Router>
  );
};

export default App;
