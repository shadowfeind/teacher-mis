import axios from "axios";
import { API_URL, tokenConfig } from "../../constants";
import {
  DOWNLOAD_ASSIGNMENT_FAIL,
  DOWNLOAD_ASSIGNMENT_REQUEST,
  DOWNLOAD_ASSIGNMENT_SUCCESS,
  GET_ALL_ASSIGNMENT_TEACHER_FAIL,
  GET_ALL_ASSIGNMENT_TEACHER_REQUEST,
  GET_ALL_ASSIGNMENT_TEACHER_SUCCESS,
  GET_ALL_OTHER_OPTIONS_FOR_SELECT_FAIL,
  GET_ALL_OTHER_OPTIONS_FOR_SELECT_REQUEST,
  GET_ALL_OTHER_OPTIONS_FOR_SELECT_SUCCESS,
  GET_ENGLISH_DATE_FAIL,
  GET_ENGLISH_DATE_REQUEST,
  GET_ENGLISH_DATE_SUCCESS,
  GET_LIST_TEACHER_ASSIGNMENT_FAIL,
  GET_LIST_TEACHER_ASSIGNMENT_REQUEST,
  GET_LIST_TEACHER_ASSIGNMENT_SUCCESS,
  GET_SINGLE_CREATE_TEACHER_ASSIGNMENT_FAIL,
  GET_SINGLE_CREATE_TEACHER_ASSIGNMENT_REQUEST,
  GET_SINGLE_CREATE_TEACHER_ASSIGNMENT_SUCCESS,
  GET_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_FAIL,
  GET_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_REQUEST,
  GET_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_SUCCESS,
  GET_TEACHER_ASSIGNMENT_CONTENT_FAIL,
  GET_TEACHER_ASSIGNMENT_CONTENT_REQUEST,
  GET_TEACHER_ASSIGNMENT_CONTENT_SUCCESS,
  POST_TEACHER_ASSIGNMENT_FAIL,
  POST_TEACHER_ASSIGNMENT_REQUEST,
  POST_TEACHER_ASSIGNMENT_SUCCESS,
  PUT_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_FAIL,
  PUT_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_REQUEST,
  PUT_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_SUCCESS,
} from "./AssignmentConstants";

export const getAllAssignmentTeacherAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_ASSIGNMENT_TEACHER_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/TeacherAssignment/GetAllTeacherAssignment`,
      tokenConfig
    );

    dispatch({
      type: GET_ALL_ASSIGNMENT_TEACHER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_ASSIGNMENT_TEACHER_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getAllOtherOptionsForSelectAction =
  (id, subject) => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_OTHER_OPTIONS_FOR_SELECT_REQUEST });

      const year = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetAttendanceForAcademicYear?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const program = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetCurseDeliveryPlanForFacultyProgram?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const classId = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetCurseDeliveryPlanForLevel?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}
        `,
        tokenConfig
      );

      const section = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetCurseDeliveryPlanForSection?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const shift = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetCurseDeliveryPlanForShift?idAcademicFacultySubjectLink=${subject}&idTeacher=${id}`,
        tokenConfig
      );

      const data = {
        year: year.data,
        program: program.data,
        classId: classId.data,
        section: section.data,
        shift: shift.data,
      };

      dispatch({
        type: GET_ALL_OTHER_OPTIONS_FOR_SELECT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_OTHER_OPTIONS_FOR_SELECT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getListAssignmentTeacherAction =
  (year, program, classId, subject, section, shift, currentDate) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_TEACHER_ASSIGNMENT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetListTeacherAssignment?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&section=${section}&idShift=${shift}&idAcademicFacultySubjectLink=${subject}&assignmentDate=${currentDate}
        `,
        tokenConfig
      );

      dispatch({
        type: GET_LIST_TEACHER_ASSIGNMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_TEACHER_ASSIGNMENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getEnglishDateAction = (year, month) => async (dispatch) => {
  try {
    dispatch({ type: GET_ENGLISH_DATE_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/TeacherAssignment/GetEngDate?year=${year}&month=${month}
        `,
      tokenConfig
    );

    dispatch({
      type: GET_ENGLISH_DATE_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ENGLISH_DATE_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getSingleCreateTeacherAssignmentAction =
  (year, program, classId, section, shift, subject, currentDate) =>
  async (dispatch) => {
    try {
      dispatch({ type: GET_SINGLE_CREATE_TEACHER_ASSIGNMENT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetSingleToCreateTeacherAssignment?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&section=${section}&idShift=${shift}&idAcademicFacultySubjectLink=${subject}&assignmentDate=${currentDate}`,
        tokenConfig
      );

      dispatch({
        type: GET_SINGLE_CREATE_TEACHER_ASSIGNMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_CREATE_TEACHER_ASSIGNMENT_FAIL,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const postTeacherAssignmentAction =
  (image, assignment, students) => async (dispatch) => {
    try {
      dispatch({ type: POST_TEACHER_ASSIGNMENT_REQUEST });

      let formData = new FormData();
      formData.append("ImageUploaded", image);

      const { data } = await axios.post(
        `${API_URL}/api/TeacherAssignment/FileUpload`,
        formData,
        tokenConfig
      );

      if (data) {
        const newData = {
          ...assignment,
          DocumentName: data,
        };
        const jsonData = JSON.stringify({
          dbTeacherAssignmentModel: newData,
          dbModelLstForStudentSection: students,
        });

        await axios.post(
          `${API_URL}/api/TeacherAssignment/Post`,
          jsonData,
          tokenConfig
        );
      }

      dispatch({
        type: POST_TEACHER_ASSIGNMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_TEACHER_ASSIGNMENT_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getTeacherAssignmentContentAction =
  (year, program, classId, section, shift, subject) => async (dispatch) => {
    try {
      dispatch({ type: GET_TEACHER_ASSIGNMENT_CONTENT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetAssignmentContent?idAcademicYear=${year}&idFacultyProgramLink=${program}&level=${classId}&section=${section}&idShift=${shift}&idAcademicFacultySubjectLink=${subject}`,
        tokenConfig
      );

      dispatch({
        type: GET_TEACHER_ASSIGNMENT_CONTENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_TEACHER_ASSIGNMENT_CONTENT_FAIL,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const getSingleToEditTeacherAssignmentAction =
  (id) => async (dispatch) => {
    try {
      dispatch({ type: GET_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_REQUEST });

      const { data } = await axios.get(
        `${API_URL}/api/TeacherAssignment/GetSingleToEditTeacherAssignment/${id}`,
        tokenConfig
      );

      dispatch({
        type: GET_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_FAIL,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const putSingleToEditTeacherAssignmentAction =
  (editData) => async (dispatch) => {
    try {
      dispatch({ type: PUT_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_REQUEST });

      const jsonData = JSON.stringify({
        dbTeacherAssignmentModel: editData,
      });

      const { data } = await axios.put(
        `${API_URL}/api/TeacherAssignment/PutTeacherAssignment`,
        jsonData,
        tokenConfig
      );

      dispatch({
        type: PUT_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: PUT_SINGLE_TO_EDIT_TEACHER_ASSIGNMENT_FAIL,
        payload:
          error.message && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const downloadAssignmentAction = (id) => async (dispatch) => {
  try {
    dispatch({ type: DOWNLOAD_ASSIGNMENT_REQUEST });

    // const tokenConfigTest = {
    //   headers: {
    //     dataType: "binary",
    //     processData: false,
    //     responseType: "arraybuffer",
    //     Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJiMzY1ZWVkNi1iOThlLTRkYmItYWQyZi03MjE0ZGQyM2NiY2QiLCJJRFVzZXIiOiIxNDAwOSIsIklEUm9sZSI6IjUiLCJNYXJrQXNBZG1pbiI6IkZhbHNlIiwiSURIUkJyYW5jaCI6IjEiLCJJRERlcGFydG1lbnQiOiIxIiwiY29tcGFueSI6IjIiLCJJc1RlbXBvcmFyeVNlc3Npb25FbmFibGVkIjoiRmFsc2UiLCJJc05ld2x5QWRlZCI6IkZhbHNlIiwiSXNEZXBhcnRtZW50SGVhZCI6IkZhbHNlIiwiUmVtZW1iZXJNZSI6IkZhbHNlIiwiRnVsbE5hbWUiOiJTdXJlc2ggQ2xhc3MgT25lIiwicGlkUmVmRm9yRWRpdCI6ImNsYXNzb25lIiwiZXhwIjoxNjQ0MjE3OTQ3LCJpc3MiOiJodHRwOi8vbXlzaXRlLmNvbSIsImF1ZCI6Imh0dHA6Ly9teXNpdGUuY29tIn0.7NaAjqe3aPA9z83rrrkajV_E9-JAkqtT3Ru9JgFibMI`,
    //   },
    // };
    // debugger;
    // const { data } = await axios.get(
    //   `${API_URL}/api/TeacherAssignment/DownloadTEacherAssignmentDoc/${id}`
    //   tokenConfig
    //   tokenConfigTest
    // );

    const test = `${API_URL}/api/TeacherAssignment/DownloadTEacherAssignmentDoc/${id}`;

    window.open(test, "_blank");
    dispatch({
      type: DOWNLOAD_ASSIGNMENT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DOWNLOAD_ASSIGNMENT_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};
