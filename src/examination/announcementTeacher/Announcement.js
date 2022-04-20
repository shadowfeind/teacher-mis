import React, { useEffect, useState } from "react";
import {
  Button,
  InputAdornment,
  makeStyles,
  TableBody,
  Toolbar,
} from "@material-ui/core";
import useCustomTable from "../../customHooks/useCustomTable";
import InputControl from "../../components/controls/InputControl";
import { Search } from "@material-ui/icons";
import AddIcon from "@material-ui/icons/Add";
import Popup from "../../components/Popup";
import LoadingComp from "../../components/LoadingComp";
import CustomContainer from "../../components/CustomContainer";
import { useDispatch, useSelector } from "react-redux";
import Notification from "../../components/Notification";
import ConfirmDialog from "../../components/ConfirmDialog";
import { GET_ALL_ANNOUNCEMENT_TEACHER_RESET } from "./AnnouncementConstant";
import { getAllTeacherAnnouncementAction } from "./AnnouncementActions";
import AnnouncementTableCollapse from "./AnnouncementTableCollapse";

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
  
  const tableHeader = [
    { id: "NewsHeading", label: "News Heading" },
    { id: "NewsDescription", label: "News Description" },
    { id: "Created_On", label: "Created On" },
    { id: "Updated_On", label: "Updated On" },
    { id: "IsActive", label: "IsActive" },
  ];

  const Announcement = () => {

    const [tableData, setTableData] = useState([]);
  const [filterFn, setFilterFn] = useState({
    fn: (item) => {
      return item;
    },
  });

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

  const classes = useStyles();

  const dispatch = useDispatch();

  const { announcement, error,loading } = useSelector((state) => state.getAllTeacherAnnouncement);


  if (error) {
    setNotify({
      isOpen: true,
      message: error,
      type: "error",
    });
    dispatch({ type: GET_ALL_ANNOUNCEMENT_TEACHER_RESET });
  }

  useEffect(() => {
    if (!announcement) {
      dispatch(getAllTeacherAnnouncementAction());
    }
    if (announcement) {
      setTableData(announcement.dbModelLst);
    }
  }, [dispatch, announcement]);

  useEffect(() => {
    dispatch({ type: "GET_LINK", payload: "/announcement" });
  }, [dispatch]);


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
            x.NewsHeading.toLowerCase().includes(e.target.value)
          );
        }
      },
    });
  };

  return (

    <>
    <CustomContainer>
        <Toolbar>
          <InputControl
            className={classes.searchInput}
            label="Search Announcement"
            InputProps={{
              startAdornment: (
                <InputAdornment announcement="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={handleSearch}
            />
            </Toolbar>
        {loading ? (
          <LoadingComp />
        ) : (
          <>
        <TableContainer className={classes.table}>
          <TblHead />

          <TableBody>
            {tableDataAfterPagingAndSorting().map((item) => (
              <AnnouncementTableCollapse
                item={item}
                key={item.$id}
              />
            ))}
          </TableBody>
        </TableContainer>
        <TblPagination />
        </>
        )}
      </CustomContainer>
      <Notification notify={notify} setNotify={setNotify} />
      <ConfirmDialog
        confirmDialog={confirmDialog}
        setConfirmDialog={setConfirmDialog}
      />
    </>
  )}
  export default Announcement;