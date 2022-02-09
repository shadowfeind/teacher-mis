import axios from "axios";
import { API_URL, tokenConfig } from "../../constants";
import {
  GET_ALL_OLD_QUESTIONS_TEACHER_FAIL,
  GET_ALL_OLD_QUESTIONS_TEACHER_REQUEST,
  GET_ALL_OLD_QUESTIONS_TEACHER_SUCCESS,
  GET_LIST_OLD_QUESTIONS_TEACHER_FAIL,
  GET_LIST_OLD_QUESTIONS_TEACHER_REQUEST,
  GET_LIST_OLD_QUESTIONS_TEACHER_SUCCESS,
  GET_SUBJECT_OF_OLD_QUESTIONS_FAIL,
  GET_SUBJECT_OF_OLD_QUESTIONS_REQUEST,
  GET_SUBJECT_OF_OLD_QUESTIONS_SUCCESS,
} from "./OldQuestionsConstants";

export const getAllOldQuestionsTeacherAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_ALL_OLD_QUESTIONS_TEACHER_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/OldQuestionTeacher/GetAllOldQuestion`,
      tokenConfig
    );

    dispatch({
      type: GET_ALL_OLD_QUESTIONS_TEACHER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_OLD_QUESTIONS_TEACHER_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};

export const getSubjectOldQuestionsAction = (classId) => async (dispatch) => {
    try {
      dispatch({ type: GET_SUBJECT_OF_OLD_QUESTIONS_REQUEST });
  
      const { data } = await axios.get(
        `${API_URL}/api/OldQuestionTeacher/GetSubjectByIDLevel?level=${classId}`,
        tokenConfig
      );
  
      dispatch({
        type: GET_SUBJECT_OF_OLD_QUESTIONS_SUCCESS,
        payload: data,
        query: { classId },
      });
    } catch (error) {
      dispatch({
        type: GET_SUBJECT_OF_OLD_QUESTIONS_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };

export const getListOldQuestionsTeacherAction = (classId, subject) => async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_OLD_QUESTIONS_TEACHER_REQUEST });
  
      const { data } = await axios.get(
        `${API_URL}/api/OldQuestionTeacher/GetListOldQuestion?level=${classId}&idAcademicSubject=${subject}`,
        tokenConfig
      );
  
      dispatch({
        type: GET_LIST_OLD_QUESTIONS_TEACHER_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_LIST_OLD_QUESTIONS_TEACHER_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
  
