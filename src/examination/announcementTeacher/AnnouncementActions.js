import axios from "axios";
import { API_URL, tokenConfig, tokenHeader } from "../../constants";
import { GET_ALL_ANNOUNCEMENT_TEACHER_FAIL, GET_ALL_ANNOUNCEMENT_TEACHER_REQUEST, GET_ALL_ANNOUNCEMENT_TEACHER_SUCCESS } from "./AnnouncementConstant";

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