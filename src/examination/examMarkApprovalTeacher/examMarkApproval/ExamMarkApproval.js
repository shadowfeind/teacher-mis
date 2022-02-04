import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
  Grid,
} from "@material-ui/core";
import { Search } from "@material-ui/icons";
import useCustomTable from "../../../customHooks/useCustomTable";
import InputControl from "../../../components/controls/InputControl";
import Popup from "../../../components/Popup";
import CustomContainer from "../../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../../components/Notification";
import ConfirmDialog from "../../../components/ConfirmDialog";
import SelectControl from "../../../components/controls/SelectControl";
import { getBulkExamMarkApprovalSearchDataAction, getExamMarkApprovalScheduleHeaderAction, getExamMarkApprovalSearchDataAction, getInitialExamMarkApprovalDataAction } from "./ExamMarkAprrovalActions";
import {getEventAction} from "../../examMarkEntry/ExamMarkEntryActions";
import {GET_EVENT_RESET} from "../../examMarkEntry/ExamMarkEntryConstants";
import {
  GET_EXAM_MARK_APPROVAL_INITIAL_DATA_RESET,
  GET_EXAM_MARK_APPROVAL_SCHEULE_HEADER_RESET,
  POST_BULK_EXAM_MARK_APPROVAL_RESET,
} from "./ExamMarkApprovalConstant";
import ExamMarkApprovalTableCollapse from "./ExamMarkApprovalTableCollapse";
import ExamMarkApprovalBulk from "./ExamMarkApprovalBulk";

const useStyles = makeStyles((theme) => ({
  searchInput: {
    width: "75%",
    fontSize: "12px",
  },
  button: {
    position: "absolute",
    right: "10px",
  },
  customInput: {
    minWidth: "200px",
  },
}));

const test = [{ Key: "", Value: "" }];

const tableHeader = [
  { id: "RollNo", label: "Roll No" },
  { id: "FullName", label: "Full Name" },
  { id: "FullMark", label: "Full Marks(TH)" },
  { id: "FullMarkPractical", label: "Full Marks(PR/UT)" },
  { id: "ObtainedMark", label: "ObtainedMark(TH)" },
  { id: "ObtainedMarkPractical", label: "ObtainedMark(PR/UT)" },
  { id: "Division", label: "Division" },
  { id: "UpdatedOn", label: "Updated On" },
  { id: "Status", label: "Status" },
];

const ExamMarkApproval = () => {
  const [ddlClass, setDdlClass] = useState([]);
  const [academicYearDdl, setAcademicYearDdl] = useState([]);
  const [programDdl, setProgramDdl] = useState([]);
  const [ddlShift, setDdlShift] = useState([]);
  const [ddlSection, setDdlSection] = useState([]);
  const [ddlEvent, setDdlEvent] = useState([]);
  const [ddlSchedule, setDdlSchedule] = useState([]);
  const [programValue, setProgramValue] = useState();
  const [classId, setClassId] = useState();
  const [acaYear, setAcaYear] = useState();
  const [shift, setShift] = useState();
  const [section, setSection] = useState();
  const [event, setEvent] = useState();
  const [schedule, setSchedule] = useState();
  const [errors, setErrors] = useState([]);
  const dispatch = useDispatch();
  const classes = useStyles();

  const [tableData, setTableData] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (item) => {
      return item;
    },
  });
  const [openPopup, setOpenPopup] = useState(false);
  const [notify, setNotify] = useState({
    isOpen: false,
    message: "",
    type: "",
  });
  const [confirmDialog, setConfirmDialog] = useState({
    isOpen: false,
    title: "",
    subTitle: "",
  });

  const {
    TableContainer,
    TblHead,
    TblPagination,
    tableDataAfterPagingAndSorting,
  } = useCustomTable(tableData, tableHeader, filterFn);

  const handleSearch = (e) => {
    setFilterFn({
      fn: (item) => {
        if (e.target.value === "") {
          return item;
        } else {
          return item.filter((x) =>
            x.EventName.toLowerCase().includes(e.target.value)
          );
        }
      },
    });
  };

  const { examMarkApprovalInitialDatas, error} = useSelector(
    (state) => state.getExamMarkApprovalInitialData
  );

  const { allEvents, success: getEventSuccess } = useSelector(
    (state) => state.getEvent
  );

  const { scheduleHeader, error: scheduleHeaderError } = useSelector(
    (state) => state.getExamMarkApprovalScheduleHeader
  );

  const { searchData } = useSelector(
    (state) => state.getExamMarkApprovalSearchData
  );

  const { bulkData } = useSelector(
    (state) => state.getBulkExamMarkApprovalSearchData
  );

  const {
    success: postBulkExamMarkApprovalSuccess,
    error: postBulkExamMarkApprovalError,
  } = useSelector((state) => state.postBulkExamMarkApproval);
  
  if (getEventSuccess) {
    setDdlEvent(allEvents);
    dispatch({ type: GET_EVENT_RESET });
  }

  if (error) {
    setNotify({
      isOpen: true,
      message: error,
      type: "error",
    });
    dispatch({ type: GET_EXAM_MARK_APPROVAL_INITIAL_DATA_RESET });
    setOpenPopup(false);
  }
  if (scheduleHeader) {
    setDdlSchedule(scheduleHeader);
    dispatch({ type: GET_EXAM_MARK_APPROVAL_SCHEULE_HEADER_RESET });
  }
  if (postBulkExamMarkApprovalSuccess) {
    setNotify({
      isOpen: true,
      message: "Succesfully Edited",
      type: "success",
    });
    dispatch({ type: POST_BULK_EXAM_MARK_APPROVAL_RESET });
    setOpenPopup(false);
  }
  if (postBulkExamMarkApprovalSuccess) {
    setNotify({
      isOpen: true,
      message: "Succesfully Edited",
      type: "success",
    });
    dispatch({ type: POST_BULK_EXAM_MARK_APPROVAL_RESET });
    setOpenPopup(false);
  }
  if (postBulkExamMarkApprovalError) {
    setNotify({
      isOpen: true,
      message: postBulkExamMarkApprovalError,
      type: "error",
    });
    dispatch({ type: POST_BULK_EXAM_MARK_APPROVAL_RESET });
    setOpenPopup(false);
  }

  useEffect(() => {
    if (!examMarkApprovalInitialDatas) {
      dispatch(getInitialExamMarkApprovalDataAction());
    }
    if (examMarkApprovalInitialDatas) {
      setAcademicYearDdl(
        examMarkApprovalInitialDatas.searchFilterModel.ddlAcademicYear
      );
      setProgramDdl(
        examMarkApprovalInitialDatas.searchFilterModel.ddlFacultyProgramLink
      );
      setDdlClass(examMarkApprovalInitialDatas.searchFilterModel.ddlClass);
      setDdlShift(
        examMarkApprovalInitialDatas.searchFilterModel.ddlAcademicShift
      );
      setDdlSection(examMarkApprovalInitialDatas.searchFilterModel.ddlSection);
      // setDdlEvent(
      //   examMarkApprovalInitialDatas.searchFilterModel.ddlEvent
      // );
      // setDdlSchedule
      // (
      //   examMarkApprovalInitialDatas.searchFilterModel.ddlSchedule
      // );
    }
  }, [examMarkApprovalInitialDatas, dispatch]);

  useEffect(() => {
    if (searchData) {
      setTableData(searchData.dbModelLst);
    }
  }, [searchData]);

  const handleProgramValue =(value=>{
    setProgramValue(value);
    if ((acaYear, classId, shift)) {
      dispatch(
        getExamMarkApprovalScheduleHeaderAction(
          value,
          acaYear,
          classId,
          shift
        )
      );
    }
  })

  const handleYearChange = (value) => {
    setAcaYear(value);
    if (classId) {
      dispatch(getEventAction(value, programValue, classId));
    }
  };

  const handleClassIdChange = (value) => {
    setClassId(value);
    dispatch(getEventAction(acaYear, programValue, value));
  };
  
  const validate = () => {
    let temp = {};
    temp.acaYear = !acaYear ? "This feild is required" : "";
    temp.programValue = !programValue ? "This feild is required" : "";
    temp.classId = !classId ? "This feild is required" : "";
    temp.shift1 = !shift ? "This feild is required" : "";
    temp.section = !section ? "This feild is required" : "";
    temp.event = !event ? "This feild is required" : "";
    temp.schedule = !schedule ? "This feild is required" : "";

    setErrors({ ...temp });
    return Object.values(temp).every((x) => x === "");
  };

  const handleExamApprovalSearch = () => {
    if (validate()) {
      dispatch(
        getExamMarkApprovalSearchDataAction(
          acaYear,
          programValue,
          classId,
          section,
          shift,
          event,
          schedule
        )
      );
    }
  };

  const handleBulkEdit = () => {
    if (validate()) {
      dispatch(
        getBulkExamMarkApprovalSearchDataAction(
          acaYear,
          programValue,
          classId,
          section,
          shift,
          event,
          schedule
        )
      );
      setOpenPopup(true);
    }
  };

  const eventHandler = (value) => {
    setEvent(value);
    dispatch(
      getExamMarkApprovalScheduleHeaderAction(
        acaYear,
        programValue,
        classId,
        shift,
        section,
        value
      )
    );
  };
  return (
    <>
      <CustomContainer>
        <Toolbar>
          <Grid container style={{ fontSize: "12px" }}>
            <Grid item xs={3}>
              <SelectControl
                name="AcademicYear"
                label="Academic Year"
                value={acaYear}
                onChange={(e) => handleYearChange(e.target.value)}
                options={academicYearDdl}
                errors={errors.acaYear}
              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="Program/Faculty"
                label="Program/Faculty"
                value={programValue}
                onChange={(e) => handleProgramValue(e.target.value)}
                options={programDdl}
                errors={errors.programValue}

              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="Classes"
                label="Classes"
                value={classId}
                onChange={(e) => handleClassIdChange(e.target.value)}
                options={ddlClass}
                errors={errors.classId}

              />
            </Grid>
            <Grid item xs={3}>
              <SelectControl
                name="Shift"
                label="Shift"
                value={shift}
                onChange={(e) => setShift(e.target.value)}
                options={ddlShift}
                errors={errors.shift1}

              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>
              <SelectControl
                name="Section"
                label="Section"
                value={section}
                onChange={(e) => setSection(e.target.value)}
                options={ddlSection}
                errors={errors.section}

              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>
              <SelectControl
                name="EventName"
                label="Event Name"
                value={event}
                onChange={(e) => eventHandler(e.target.value)}
                options={ddlEvent ? ddlEvent : test}
                errors={errors.event}

              />
            </Grid>
            <Grid item xs={3}>
              <div style={{ height: "10px" }}></div>
              <SelectControl
                name="ExamScheduleHeader"
                label="Exam Schedule Header"
                value={schedule}
                onChange={(e) => setSchedule(e.target.value)}
                options={ddlSchedule ? ddlSchedule : test}
                errors={errors.schedule}

              />
            </Grid>

            <Grid item xs={3}>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin: "10px 0 0 10px" }}
                onClick={handleBulkEdit}
              >
                BULKEDIT
              </Button>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ margin: "10px 0 0 10px" }}
                onClick={handleExamApprovalSearch}
              >
                SEARCH
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <div style={{ height: "15px" }}></div>
        <Toolbar>
          <InputControl
            className={classes.searchInput}
            label="Search Exam Mark"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
          />
        </Toolbar>
        {searchData && (
          <TableContainer className={classes.table}>
            <TblHead />

            <TableBody>
              {tableDataAfterPagingAndSorting().map((item) => (
                <ExamMarkApprovalTableCollapse item={item} key={item.$id} />
              ))}
            </TableBody>
          </TableContainer>
        )}

        {searchData && <TblPagination />}
      </CustomContainer>
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        title="Bulk Edit"
      >
        <ExamMarkApprovalBulk
          statusData={
            bulkData && bulkData.searchFilterModel.ddlStudentExamStatus
          }
          search={bulkData && bulkData.searchFilterModel}
          bulkData={bulkData && bulkData.dbModelLsts}
        />
      </Popup>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  );
};

export default ExamMarkApproval;
