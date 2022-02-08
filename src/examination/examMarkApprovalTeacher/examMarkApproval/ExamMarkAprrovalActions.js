import axios from "axios";
import { API_URL, tokenConfig } from "../../../constants";
import {
    GET_ALL_EXAM_MARK_APPROVAL_SEARCHDATA_FAIL,
    GET_ALL_EXAM_MARK_APPROVAL_SEARCHDATA_REQUEST,
  GET_ALL_EXAM_MARK_APPROVAL_SEARCHDATA_SUCCESS,
  GET_BULK_EXAM_MARK_APPROVAL_FAIL,
  GET_BULK_EXAM_MARK_APPROVAL_REQUEST,
  GET_BULK_EXAM_MARK_APPROVAL_SUCCESS,
  GET_EXAM_MARK_APPROVAL_INITIAL_DATA_FAIL,
  GET_EXAM_MARK_APPROVAL_INITIAL_DATA_REQUEST,
  GET_EXAM_MARK_APPROVAL_INITIAL_DATA_SUCCESS,
  GET_EXAM_MARK_APPROVAL_SCHEULE_HEADER_FAIL,
  GET_EXAM_MARK_APPROVAL_SCHEULE_HEADER_REQUEST,
  GET_EXAM_MARK_APPROVAL_SCHEULE_HEADER_SUCCESS,
  POST_BULK_EXAM_MARK_APPROVAL_FAIL,
  POST_BULK_EXAM_MARK_APPROVAL_REQUEST,
  POST_BULK_EXAM_MARK_APPROVAL_SUCCESS,
} from "./ExamMarkApprovalConstant";

export const getInitialExamMarkApprovalDataAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_EXAM_MARK_APPROVAL_INITIAL_DATA_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/ApproveAcademicStudentExamDataTeacher/GetAllApproveAcademicStudentExamDataTeacher?searchKey=1
        `,
      tokenConfig
    );

    dispatch({
      type: GET_EXAM_MARK_APPROVAL_INITIAL_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_EXAM_MARK_APPROVAL_INITIAL_DATA_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getExamMarkApprovalScheduleHeaderAction =
  (year, program, classId, section, yearCalender) => async (dispatch) => {
    try {
      dispatch({ type: GET_EXAM_MARK_APPROVAL_SCHEULE_HEADER_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/ApproveAcademicStudentExamDataTeacher/GetActiveExamScheduleListForExamMarkEntry?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&section=${section}&idAcademicYearCalendar=${yearCalender}&roleID=1`,
        tokenConfig
      );

      dispatch({
        type: GET_EXAM_MARK_APPROVAL_SCHEULE_HEADER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_EXAM_MARK_APPROVAL_SCHEULE_HEADER_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

  export const getExamMarkApprovalSearchDataAction =
  (year, program, classId, section, shift, event, schedule) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_EXAM_MARK_APPROVAL_SEARCHDATA_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/ApproveAcademicStudentExamDataTeacher/GetListApproveAcademicStudentExamDataTeacher?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&section=${section}&idShift=${shift}&idAcademicYearCalendar=${event}&idAcademicExamSchedule=${schedule}&searchKey=1`,
        tokenConfig
      );

      dispatch({
        type: GET_ALL_EXAM_MARK_APPROVAL_SEARCHDATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_EXAM_MARK_APPROVAL_SEARCHDATA_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

  export const getBulkExamMarkApprovalSearchDataAction =
  (year, program, classId, section, shift, yearCalender, schedule) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_BULK_EXAM_MARK_APPROVAL_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/ApproveAcademicStudentExamDataTeacher/GetBulkApproveAcademicStudentExamDataTeacher?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&section=${section}&idShift=${shift}&idAcademicYearCalendar=${yearCalender}&idAcademicExamSchedule=${schedule}&searchKey=1`,
        tokenConfig
      );

      dispatch({
        type: GET_BULK_EXAM_MARK_APPROVAL_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_BULK_EXAM_MARK_APPROVAL_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

  export const postBulkExamMarkApprovalAction =
  (students, search) => async (dispatch) => {
    try {
      dispatch({ type: POST_BULK_EXAM_MARK_APPROVAL_REQUEST });

      const jsonData = JSON.stringify({
        dbModelLst: students,
        searchFilterModel: search,
      });

      // const config = {
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      // };

      await axios.post(
        `${API_URL}/api/ApproveAcademicStudentExamDataTeacher/PostApproveAcademicStudentExamData`,
        jsonData,
        tokenConfig
      );

      dispatch({ type: POST_BULK_EXAM_MARK_APPROVAL_SUCCESS });
    } catch (error) {
      dispatch({
        type: POST_BULK_EXAM_MARK_APPROVAL_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
