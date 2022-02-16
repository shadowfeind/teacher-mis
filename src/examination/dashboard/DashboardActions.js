import axios from "axios";
import {
  GET_TEACHER_DASHBOARD_FAIL,
  GET_TEACHER_DASHBOARD_REQUEST,
  GET_TEACHER_DASHBOARD_SUCCESS,
} from "./DashboardConstants";
import { API_URL, tokenConfig } from "../../constants";

export const getDashboardContentAction = () => async (dispatch) => {
  try {
    dispatch({ type: GET_TEACHER_DASHBOARD_REQUEST });

    const { data } = await axios.get(
      `${API_URL}/api/TeacherDashboard/GetAllTeacherDashboard`,
      tokenConfig
    );

    dispatch({ type: GET_TEACHER_DASHBOARD_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_TEACHER_DASHBOARD_FAIL,
      payload: error.message ? error.message : error.Message,
    });
  }
};
