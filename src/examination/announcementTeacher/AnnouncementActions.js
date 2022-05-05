import axios from "axios";
import { API_URL, tokenConfig, tokenHeader } from "../../constants";
import { ANNOUNCEMENT_TEACHER_FCM_FAIL, ANNOUNCEMENT_TEACHER_FCM_REQUEST, ANNOUNCEMENT_TEACHER_FCM_SUCCESS, GET_ALL_ANNOUNCEMENT_TEACHER_FAIL, GET_ALL_ANNOUNCEMENT_TEACHER_REQUEST, GET_ALL_ANNOUNCEMENT_TEACHER_SUCCESS, GET_LIST_ANNOUNCEMENT_TEACHER_FAIL, GET_LIST_ANNOUNCEMENT_TEACHER_REQUEST, GET_LIST_ANNOUNCEMENT_TEACHER_SUCCESS } from "./AnnouncementConstant";

export const getAllTeacherAnnouncementAction = () => async (dispatch) => {
    try {
      dispatch({ type: GET_ALL_ANNOUNCEMENT_TEACHER_REQUEST });
  
      const { data } = await axios.get(
        `${API_URL}/api/Announcement/GetAllAnnouncement
        `,
        tokenConfig
      );
  
      dispatch({ type: GET_ALL_ANNOUNCEMENT_TEACHER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_ALL_ANNOUNCEMENT_TEACHER_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };


  export const getListTeacherAnnouncementAction = (date) => async (dispatch) => {
    try {
      dispatch({ type: GET_LIST_ANNOUNCEMENT_TEACHER_REQUEST });
  
      const { data } = await axios.get(
        `${API_URL}/api/Announcement/GetListAnnouncement?createdDate=${date}`,
        tokenConfig
      );
  
      dispatch({ type: GET_LIST_ANNOUNCEMENT_TEACHER_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: GET_LIST_ANNOUNCEMENT_TEACHER_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };
  
  export const getFCMForTeacherAnnouncementAction = () => async (dispatch) => {
    try {
      dispatch({ type: ANNOUNCEMENT_TEACHER_FCM_REQUEST });
  
      const { data } = await axios.get(
        `${API_URL}/api/Announcement/GetSingleCreateAnnouncement`,
        tokenConfig
      );
  
      dispatch({ type: ANNOUNCEMENT_TEACHER_FCM_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type: ANNOUNCEMENT_TEACHER_FCM_FAIL,
        payload: error.message ? error.message : error.Message,
      });
    }
  };